import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private API_URL = environment.apiURL + environment.apiURI;

  constructor(private http: HttpClient) { }

  generateToken(userCredentials: { username: string; email: string }) {
    return this.http.post<{ token: string, username: string, email: string }>(`${this.API_URL}/auth/token`, userCredentials);
  }

  getToken(email: string) {
    return this.http.get<{ token: string, username: string, email: string  }>(`${this.API_URL}/auth/token/${email}`);
  }

  createUser(userCredentials: { username: string; email: string }) {
    return this.http.post(`${this.API_URL}/auth/signup`, userCredentials);
  }
}
