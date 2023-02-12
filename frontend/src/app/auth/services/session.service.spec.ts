import { TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from '../authStore/app.state';

import { SessionService } from './session.service';

describe('SessionService', () => {
  let sessionService: SessionService;
  let store: Store<AppState>;
  let router: Router;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        SessionService,
        { provide: Store, useValue: {} },
        { provide: Router, useValue: {} }
      ]
    });

    sessionService = TestBed.inject(SessionService);
    store = TestBed.inject(Store);
    router = TestBed.inject(Router);
  });

  it('should be created', () => {
    expect(sessionService).toBeTruthy();
  });
});
