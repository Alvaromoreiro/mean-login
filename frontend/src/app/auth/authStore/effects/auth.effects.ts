import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { catchError, from, map, of, switchMap } from 'rxjs';
import { AuthService } from '../../services/auth.service';
import { login, loginFailure, loginSuccess, logOut, logOutFaliure, logOutSuccess, register, registerFailure, registerSuccess } from '../actions/auth.actions';
import { AppState } from '../app.state';

@Injectable()
export class AuthEffects {

  constructor(
    private actions$: Actions,
    private store: Store<AppState>,
    private authService: AuthService
  ) {}

  register$ = createEffect(() =>
    this.actions$.pipe(
      ofType(register),
      switchMap(user =>
        from(this.authService.register(user)).pipe(
          map((response) => registerSuccess(response)),
          catchError((error) => of(registerFailure(error)))
        )
      )
    )
  )

  login$ = createEffect(() =>
    this.actions$.pipe(
      ofType(login),
      switchMap(user =>
        from(this.authService.login(user)).pipe(
          map((response) => loginSuccess(response)),
          catchError((error) => of(loginFailure(error)))
        )
      )
    )
  )

  logOut$ = createEffect(() =>
    this.actions$.pipe(
      ofType(logOut),
      switchMap(request =>
        from(this.authService.logOut(request)).pipe(
          map((response) => logOutSuccess({ message: response })),
          catchError((error) => of(logOutFaliure(error)))
        )
      )
    )
  )

}
