import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthConstants } from '../constants/auth-service.constants'
import { LoginRequest, LoginResponse, LogOutRequest, RegisterRequest, RegisterResponse } from './models/auth-user.model';

/**
 * @description Service in charge of registration, login and logout requests.
 *
 * @export AuthService
 */
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) {}

  /**
   * @description Login user
   *
   * @param {LoginRequest} user
   * @returns {Observable<LoginResponse>} userDetails
   * @memberof AuthService
   */
  login(user: LoginRequest): Observable<LoginResponse> {
    return this.http.post<LoginResponse>(AuthConstants.SERVER_URL + AuthConstants.END_POINTS.LOGIN, user);
  }

  /**
   * @description Register user
   *
   * @param {RegisterRequest} user
   * @returns {Observable<RegisterResponse>} userDetails
   * @memberof AuthService
   */
  register(user: RegisterRequest): Observable<RegisterResponse> {
    return this.http.post<RegisterResponse>(AuthConstants.SERVER_URL + AuthConstants.END_POINTS.REGISTER, user);
  }

  /**
   * @description Log out user
   *
   * @param {LogOutRequest} request
   * @returns {Observable<string>} message
   * @memberof AuthService
   */
  logOut(request: LogOutRequest): Observable<string> {
    return this.http.post<string>(AuthConstants.SERVER_URL + AuthConstants.END_POINTS.LOGOUT, { email: request.email }, { headers: { authorization: request.accessToken } });
  }
}
