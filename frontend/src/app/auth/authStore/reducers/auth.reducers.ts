import { createReducer, on } from '@ngrx/store';
import { login, loginFailure, loginSuccess, logOut, logOutFaliure, logOutSuccess, register, registerFailure, registerSuccess } from '../actions/auth.actions';
import { UserInferface } from './../../models/user.model';

export interface AuthState {
  isAuthenticated: boolean;
  user: UserInferface | null;
  error: any
  status: 'pending' | 'loading' | 'error' | 'success'
}

export const initialState: AuthState = {
  isAuthenticated: false,
  user: null,
  error: '',
  status: 'pending'
};

export const authReducer = createReducer(
  //Supply the initial state
  initialState,
  on(login, (state, { email, password }) => ({ ...state, status: 'loading' })),
  on(register, (state, { email, username, password }) => ({ ...state, status: 'loading' })),
  on(loginSuccess, (state, { username, email, accessToken, expiresIn }) =>
  ({
    ...state,
    isAuthenticated: true,
    user: { email: email, username: username, token: accessToken, expiresIn: expiresIn },
    status: 'success'
  })
  ),
  on(registerSuccess, (state, { username, email, accessToken, expiresIn }) =>
  ({
    ...state,
    isAuthenticated: true,
    user: { email: email, username: username, token: accessToken, expiresIn: expiresIn },
    status: 'success'
  })
  ),
  on(loginFailure, (state, { error }) =>
  ({
    ...state,
    isAuthenticated: false,
    user: null,
    error: error,
    status: 'error'
  })
  ),
  on(registerFailure, (state, { error }) =>
  ({
    ...state,
    isAuthenticated: false,
    user: null,
    error: error,
    status: 'error'
  })
  ),
  on(logOut, (state, { accessToken, email }) =>
  ({
    ...state,
    status: 'loading'
  })
  ),
  on(logOutSuccess, (state, { message }) =>
  ({
    ...state,
    isAuthenticated: false,
    user: null,
    error: null,
    status: 'success'
  })
  ),
  on(logOutFaliure, (state, { error }) =>
  ({
    ...state,
    error: error,
    status: 'error'
  })
  ),
)
