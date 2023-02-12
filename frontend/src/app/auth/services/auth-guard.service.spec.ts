import { TestBed } from '@angular/core/testing';
import { Store } from '@ngrx/store';
import { AppState } from '../authStore/app.state';

import { AuthGuardService } from './auth-guard.service';

class StoreMock {
  select = jasmine.createSpy();
  dispatch = jasmine.createSpy();
}

describe('AuthGuardService', () => {
  let service: AuthGuardService;
  let store: Store<AppState>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        AuthGuardService,
        { provide: Store, useClass: StoreMock },
      ]
    });
    service = TestBed.inject(AuthGuardService);
    store = TestBed.inject(Store);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
