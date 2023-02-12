import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProfileComponent } from './profile.component';
import { Store } from '@ngrx/store';
import { UserInferface } from 'src/app/auth/models/user.model';
import { of } from 'rxjs';

class StoreMock {
  select = jasmine.createSpy().and.returnValue(of({ email: 'testemail@example.com' } as UserInferface));
  dispatch = jasmine.createSpy();
}

describe('ProfileComponent', () => {
  let component: ProfileComponent;
  let fixture: ComponentFixture<ProfileComponent>;
  let store: Store;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProfileComponent],
      providers: [
        { provide: Store, useClass: StoreMock },
      ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileComponent);
    component = fixture.componentInstance;
    store = TestBed.inject(Store);
    fixture.detectChanges();
  });

  afterEach(() => {
    component.ngOnDestroy();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display user email', () => {
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('p').textContent).toContain('TESTEMAIL@EXAMPLE.COM');
  });
});
