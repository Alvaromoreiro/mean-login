import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthConstants } from '../services/constants/auth.constants'
import { LoginRequest, LoginResponse, LogOutRequest, RegisterRequest, RegisterResponse } from './models/auth-user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) {}

  login(user: LoginRequest): Observable<LoginResponse> {
    return this.http.post<LoginResponse>(AuthConstants.SERVER_URL + AuthConstants.END_POINTS.LOGIN, user);
  }

  /*
  * @describe: The register method is used to register a new user.
  * It takes a RegisterRequest object as a parameter.
  * It returns an Observable of type RegisterResponse.
  */
  register(user: RegisterRequest): Observable<RegisterResponse> {
    return this.http.post<RegisterResponse>(AuthConstants.SERVER_URL + AuthConstants.END_POINTS.REGISTER, user);
  }

  logOut(request: LogOutRequest): Observable<string> {
    return this.http.post<string>(AuthConstants.SERVER_URL + AuthConstants.END_POINTS.LOGOUT, { email: request.email }, { headers: { authorization: request.accessToken } });
  }
}
