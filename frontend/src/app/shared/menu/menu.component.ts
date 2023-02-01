import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subject, takeUntil } from 'rxjs';
import { logOut } from 'src/app/auth/authStore/actions/auth.actions';
import { AppState } from 'src/app/auth/authStore/app.state';
import { selectIsAuthenticatedState, selectUserInfoState } from 'src/app/auth/authStore/selectors/auth.selectors';
import { UserInferface } from 'src/app/auth/models/user.model';
import { LogOutRequest } from 'src/app/auth/services/models/auth-user.model';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  public isLogged$ = this.store.select(selectIsAuthenticatedState);
  public userInfo$ = this.store.select(selectUserInfoState);

  public userInfo: UserInferface | null = null;

  constructor(private store: Store<AppState>) {}

  public ngDestroyed$ = new Subject();

  public ngOnDestroy() {
    this.ngDestroyed$.next(null);
  }


  ngOnInit(): void {
    this.userInfo$
      .pipe(takeUntil(this.ngDestroyed$))
      .subscribe((userInfo) => { this.userInfo = userInfo });
  }

  logOut() {
    console.log(this.userInfo)
    const logOutRequest: LogOutRequest = {
      email: this.userInfo?.email ? this.userInfo?.email : '',
      accessToken: this.userInfo?.token ? this.userInfo?.token : ''
    }

    this.store.dispatch(logOut(logOutRequest))
  }

}
