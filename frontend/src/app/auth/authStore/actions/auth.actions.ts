import { createAction, props } from '@ngrx/store';
import { LoginRequest, LoginResponse, LogOutRequest, RegisterRequest, RegisterResponse } from '../../services/models/auth-user.model';

export const register = createAction(
  '[Auth] Register',
  props<RegisterRequest>()
);

export const login = createAction(
  '[Auth] Login',
  props<LoginRequest>()
);

export const loginSuccess = createAction(
  '[Auth] Login Success',
  props<LoginResponse>()
);

export const loginFailure = createAction(
  '[Auth] Login Failure',
  props<{ error: any }>()
);

export const registerSuccess = createAction(
  '[Auth] Register Success',
  props<RegisterResponse>()
);

export const registerFailure = createAction(
  '[Auth] Register Failure',
  props<{ error: any }>()
);


export const logOut = createAction(
  '[Auth] Logout',
  props<LogOutRequest>()
);

export const logOutSuccess = createAction(
  '[Auth] LogoutSuccess',
  props<{ message: string }>()
);

export const logOutFaliure = createAction(
  '[Auth] LogoutSuccess',
  props<{ error: any }>()
);


export type AuthActions = typeof login | typeof loginSuccess | typeof loginFailure |
  typeof logOut | typeof register | typeof registerSuccess | typeof registerFailure;
