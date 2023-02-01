import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthConstants } from '../constants/auth-service.constants'
import { LoginRequest, LoginResponse, LogOutRequest, RegisterRequest, RegisterResponse } from './models/auth-user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) {}

  login(user: LoginRequest): Observable<LoginResponse> {
    return this.http.post<LoginResponse>(AuthConstants.SERVER_URL + AuthConstants.END_POINTS.LOGIN, user);
  }

  register(user: RegisterRequest): Observable<RegisterResponse> {
    return this.http.post<RegisterResponse>(AuthConstants.SERVER_URL + AuthConstants.END_POINTS.REGISTER, user);
  }

  logOut(request: LogOutRequest): Observable<string> {
    return this.http.post<string>(AuthConstants.SERVER_URL + AuthConstants.END_POINTS.LOGOUT, { email: request.email }, { headers: { authorization: request.accessToken } });
  }
}
