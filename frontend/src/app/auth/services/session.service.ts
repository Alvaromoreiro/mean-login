import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { logOut } from '../authStore/actions/auth.actions';
import { AppState } from '../authStore/app.state';
import { UserInferface } from '../models/user.model';
import { LogOutRequest } from './models/auth-user.model';

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  private timeoutId: any;

  constructor(private store: Store<AppState>, private router: Router) {}

  startSessionTimer(duration: number | undefined, userInfo: UserInferface | null) {
    const logOutRequest: LogOutRequest = {
      email: userInfo?.email ? userInfo?.email : '',
      accessToken: userInfo?.token ? userInfo?.token : ''
    }

    if (duration) {
      this.timeoutId = setTimeout(() => {
        this.store.dispatch(logOut(logOutRequest));
        this.router.navigate(["/login"]);
      }, duration - 1000);
    }
  }

  clearSessionTimer() {
    clearTimeout(this.timeoutId);
  }
}

