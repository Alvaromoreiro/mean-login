import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subject, takeUntil } from 'rxjs';
import { AppState } from 'src/app/auth/authStore/app.state';
import { selectUserInfoState } from 'src/app/auth/authStore/selectors/auth.selectors';
import { UserInferface } from 'src/app/auth/models/user.model';

@Component({
  selector: 'app-profile',
  template: `
    <p-card>
      <h2>This is your profile</h2>
      <p>
        {{userInfo?.email | uppercase}}
      </p>
    </p-card>
  `,
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(private store: Store<AppState>) {}


  public userInfo$ = this.store.select(selectUserInfoState);

  public userInfo: UserInferface | null = null;
  public ngDestroyed$ = new Subject();


  ngOnInit(): void {
    this.userInfo$
      .pipe(takeUntil(this.ngDestroyed$))
      .subscribe((userInfo) => { this.userInfo = userInfo });
  }

  public ngOnDestroy() {
    this.ngDestroyed$.next(null);
  }

}
