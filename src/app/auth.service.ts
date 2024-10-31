import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router'; // Importez le Router
import { tap } from 'rxjs/operators';
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private loginUrl = 'http://localhost:3005/login';
  private logoutUrl = 'http://localhost:3005/logout'; // Ajoutez cette URL

  constructor(private http: HttpClient, private router: Router) {} // Injectez le Router

  login(phoneNumber: string, code: string): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const body = { numero: phoneNumber, code };
    
    return this.http.post(this.loginUrl, body, { headers, withCredentials: true }).pipe(
      tap(response => {
        // Stocke le token dans localStorage
        localStorage.setItem('token', (response as any).token);
      })
    );
  }
  

  logout(): Observable<any> {
    return this.http.post(this.logoutUrl, {}, { withCredentials: true }).pipe(
      tap(() => {
        localStorage.removeItem('token'); // Supprimez le token localement
        this.router.navigate(['/login']); // Redirige vers la page de login
      })
    );
  }

  // auth.service.ts
  isAuthenticated(): boolean {
    // Vérifiez si un token existe ou utilisez une logique de validation

    return !!localStorage.getItem('token');
  }
}