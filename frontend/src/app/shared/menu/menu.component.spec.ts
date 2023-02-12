import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Store } from '@ngrx/store';
import { of } from 'rxjs';
import { AppState } from 'src/app/auth/authStore/app.state';
import { UserInferface } from 'src/app/auth/models/user.model';

import { MenuComponent } from './menu.component';

class StoreMock {
  select = jasmine.createSpy().and.returnValue(of({ email: 'testemail@example.com' } as UserInferface));
  dispatch = jasmine.createSpy();
}


describe('MenuComponent', () => {
  let component: MenuComponent;
  let fixture: ComponentFixture<MenuComponent>;
  let store: Store<AppState>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MenuComponent],
      providers: [
        { provide: Store, useClass: StoreMock },
      ]
    })
    store = TestBed.inject(Store);
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
