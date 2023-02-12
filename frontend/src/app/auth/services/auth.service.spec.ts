import { TestBed, inject } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { AuthService } from './auth.service';
import { LoginResponse, LogOutRequest, RegisterRequest, RegisterResponse } from './models/auth-user.model';
import { of } from 'rxjs';

describe('AuthService', () => {
  let service: AuthService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [AuthService]
    });

    service = TestBed.inject(AuthService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should make a POST request to login and return an access token', () => {
    const loginData = {
      email: 'example@example.com',
      password: '123456'
    };

    const mockResponse: LoginResponse = {
      username: 'testuser',
      email: 'testuser@example.com',
      token: 'testtoken',
      expiresIn: 3600,
      isLogged: true
    };
    service.login(loginData).subscribe((response) => {
      expect(response).toEqual(mockResponse);
    });

    const req = httpMock.expectOne('http://localhost:3000/login');
    expect(req.request.method).toEqual('POST');
    req.flush(mockResponse);
  });

  it('should make a POST request to register and return an access token', () => {
    const registerData: RegisterRequest = {
      username: 'testuser',
      email: 'test@test.com',
      password: '123456'
    };

    const mockResponse: RegisterResponse = {
      username: 'testuser',
      email: 'testuser@example.com',
      accessToken: 'testtoken',
      expiresIn: 3600,
      isLogged: true
    };
    service.register(registerData).subscribe((response) => {
      expect(response).toEqual(mockResponse);
    });

    const req = httpMock.expectOne('http://localhost:3000/register');
    expect(req.request.method).toEqual('POST');
    req.flush(mockResponse);
  });

  it('should make a POST request to login and return an access token', () => {
    const loginData: LogOutRequest = {
      email: 'example@example.com',
      accessToken: '123456'
    };

    const mockResponse: string = 'User logged out';
    service.logOut(loginData).subscribe((response) => {
      expect(response).toEqual(mockResponse);
    });

    const req = httpMock.expectOne('http://localhost:3000/logout');
    expect(req.request.method).toEqual('POST');
    req.flush(mockResponse);
  });
});
