import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterFormErrorsComponent } from './register-form-errors.component';

describe('RegisterFormErrorsComponent', () => {
  let component: RegisterFormErrorsComponent;
  let fixture: ComponentFixture<RegisterFormErrorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterFormErrorsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegisterFormErrorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
