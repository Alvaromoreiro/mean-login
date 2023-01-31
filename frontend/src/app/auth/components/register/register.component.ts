import { Component } from '@angular/core';
import { FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { register } from '../../authStore/actions/auth.actions';
import { selectIsAuthenticatedState, selectUserInfoState } from '../../authStore/selectors/auth.selectors';
import { registerFormInterface } from '../../models/forms.model';
import { RegisterRequest } from '../../services/models/auth-user.model';
import { AppState } from '../../authStore/app.state'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  public isLogged$ = this.store.select(selectIsAuthenticatedState);
  public userInfo$ = this.store.select(selectUserInfoState);

  constructor(private store: Store<AppState>) {}

  isPasswordVisible: boolean = false;
  isFormSubmitted: boolean = false;

  usernameRegex: RegExp = /^[a-zA-Z0-9]+$/;
  emailRegex: RegExp = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;
  passwordRegex: RegExp = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;

  usernameFilterRegex: RegExp = /[^a-zA-Z0-9]/g;

  private passwordMatchValidator: ValidationErrors = (form: FormGroup) => {
    if (form.get('password')?.value !== form.get('passwordConfirm')?.value) {
      return { passwordMismatch: true };
    }
    return null;
  };

  public registerForm = new FormGroup<registerFormInterface>({
    username: new FormControl('', [Validators.pattern(this.usernameRegex), Validators.required]),
    email: new FormControl('', [Validators.pattern(this.emailRegex), Validators.required]),
    password: new FormControl('', [Validators.pattern(this.passwordRegex), Validators.required]),
    passwordConfirm: new FormControl('', [Validators.pattern(this.passwordRegex), Validators.required])
  }, this.passwordMatchValidator);

  onSubmit() {
    this.isFormSubmitted = true;
    if (this.registerForm.valid) {
      const userRegister: RegisterRequest = {
        email: this.registerForm.value.email ? this.registerForm.value.email : '',
        username: this.registerForm.value.username ? this.registerForm.value.username : '',
        password: this.registerForm.value.password ? this.registerForm.value.password : '',
      }
      this.store.dispatch(register(userRegister))
    }
  }

}
