import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './contracts/user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private http: HttpClient) { }

  getToken() {
    return sessionStorage.getItem('jwt-token');
  }

  login(email: string, password: string): Observable<any> {
    return this.http.post<User>('http://localhost:4200/users/authenticate', { email, password });
  }


}
