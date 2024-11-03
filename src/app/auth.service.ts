import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private loginUrl = 'http://localhost:3005/login';
  private logoutUrl = 'http://localhost:3005/logout';
  private registerUrl = 'http://localhost:3005/user/create'; // URL pour l'inscription
  private userSubject = new BehaviorSubject<any>(null);
  public user$ = this.userSubject.asObservable();

  constructor(private http: HttpClient, private router: Router) {
    this.loadUserFromLocalStorage();
  }

  private loadUserFromLocalStorage(): void {
    const userData = localStorage.getItem('user');
    if (userData) {
      this.userSubject.next(JSON.parse(userData));
    }
  }

  login(phoneNumber: string, code: string): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const body = { numero: phoneNumber, code };

    return this.http.post(this.loginUrl, body, { headers, withCredentials: true }).pipe(
      tap(response => {
        const user = (response as any).user;
        const token = (response as any).token;
        localStorage.setItem('token', token);
        localStorage.setItem('user', JSON.stringify(user));
        this.userSubject.next(user);
      })
    );
  }

  register(user: any): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const apiUrl = 'http://localhost:3005/user/create';
    
    return this.http.post(apiUrl, user, { headers });
  }  
  logout(): Observable<any> {
    return this.http.post(this.logoutUrl, {}, { withCredentials: true }).pipe(
      tap(() => {
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        this.userSubject.next(null);
        this.router.navigate(['/login']);
      })
    );
  }

  isAuthenticated(): boolean {
    return !!localStorage.getItem('token');
  }
}
