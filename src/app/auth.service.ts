import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiUrl = 'http://localhost:3005/login';

  constructor(private http: HttpClient) {}
  
  login(phoneNumber: string, code: string): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const body = { numero: phoneNumber, code };
    return this.http.post(this.apiUrl, body, { headers, withCredentials: true });
}

}
