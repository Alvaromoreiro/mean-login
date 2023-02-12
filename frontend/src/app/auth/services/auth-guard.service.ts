import { Injectable } from '@angular/core';
import { CanActivate, Router, } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable, Subject, takeUntil, tap } from 'rxjs';
import { AppState } from '../authStore/app.state';
import { selectIsAuthenticatedState } from '../authStore/selectors/auth.selectors';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  public isLogged$ = this.store.select(selectIsAuthenticatedState);

  constructor(private store: Store<AppState>, private router: Router) {}

  canActivate(): Observable<boolean> {
    return this.isLogged$
      .pipe(
        tap((isLogged) => {
          if (!isLogged) {
            this.router.navigate(['login']);
          }
        }),
        takeUntil(this.ngDestroyed$)
      )

  }

  public ngDestroyed$ = new Subject();

  public ngOnDestroy() {
    this.ngDestroyed$.next(null);
  }
}
