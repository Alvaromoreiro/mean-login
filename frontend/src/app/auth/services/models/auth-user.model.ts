export interface LoginRequest {
  email: string;
  password: string
}

export interface RegisterRequest {
  username: string;
  email: string;
  password: string;
}

export interface LogOutRequest {
  email: string;
  accessToken: string;
}

export interface LoginResponse {
  username: string,
  email: string,
  accessToken: string;
  expiresIn: number;
}

export interface RegisterResponse {
  username: string,
  email: string,
  accessToken: string;
  expiresIn: number;
}

