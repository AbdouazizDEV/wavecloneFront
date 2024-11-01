import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, BehaviorSubject, of } from 'rxjs';
import { Router } from '@angular/router';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private loginUrl = 'http://localhost:3005/login';
  private logoutUrl = 'http://localhost:3005/logout';
  private userSubject = new BehaviorSubject<any>(null);
  public user$ = this.userSubject.asObservable();

  constructor(private http: HttpClient, private router: Router) {
    // Charger les infos utilisateur depuis le localStorage au démarrage
    this.loadUserFromLocalStorage();
  }

  private loadUserFromLocalStorage(): void {
    const userData = localStorage.getItem('user');
    if (userData) {
      // Parse les données utilisateur depuis le localStorage
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

        // Stocke le token et les informations utilisateur dans le localStorage
        localStorage.setItem('token', token);
        localStorage.setItem('user', JSON.stringify(user));

        // Met à jour l'observable user$ avec les informations de l'utilisateur
        this.userSubject.next(user);
      })
    );
  }

  logout(): Observable<any> {
    return this.http.post(this.logoutUrl, {}, { withCredentials: true }).pipe(
      tap(() => {
        // Supprimez le token et les informations utilisateur du localStorage
        localStorage.removeItem('token');
        localStorage.removeItem('user');

        // Réinitialise les informations de l'utilisateur dans l'application
        this.userSubject.next(null);
        
        // Redirige vers la page de login
        this.router.navigate(['/login']);
      })
    );
  }

  isAuthenticated(): boolean {
    return !!localStorage.getItem('token');
  }
}
