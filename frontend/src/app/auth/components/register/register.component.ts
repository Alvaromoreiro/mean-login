import { Component } from '@angular/core';
import { FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { register } from '../../authStore/actions/auth.actions';
import { registerFormInterface } from '../../models/forms.model';
import { RegisterRequest } from '../../services/models/auth-user.model';
import { AppState } from '../../authStore/app.state'
import { AuthComponentsConstants } from '../../constants/auth-components.constants';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  constructor(private store: Store<AppState>) {}

  isPasswordVisible: boolean = false;
  isFormSubmitted: boolean = false;



  private passwordMatchValidator: ValidationErrors = (form: FormGroup) => {
    if (form.get('password')?.value !== form.get('passwordConfirm')?.value) {
      return { passwordMismatch: true };
    }
    return null;
  };

  public registerForm = new FormGroup<registerFormInterface>({
    username: new FormControl('', [Validators.pattern(AuthComponentsConstants.usernameRegex), Validators.required]),
    email: new FormControl('', [Validators.pattern(AuthComponentsConstants.emailRegex), Validators.required]),
    password: new FormControl('', [Validators.pattern(AuthComponentsConstants.passwordRegex), Validators.required]),
    passwordConfirm: new FormControl('', [Validators.pattern(AuthComponentsConstants.passwordRegex), Validators.required])
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
