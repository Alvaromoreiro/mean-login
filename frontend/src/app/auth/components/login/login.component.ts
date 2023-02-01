import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { login } from '../../authStore/actions/auth.actions';
import { AppState } from '../../authStore/app.state';
import { AuthComponentsConstants } from '../../constants/auth-components.constants';
import { loginFormInterface } from '../../models/forms.model';
import { LoginRequest } from '../../services/models/auth-user.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private store: Store<AppState>) {}

  public loginForm = new FormGroup<loginFormInterface>({
    email: new FormControl('', [Validators.pattern(AuthComponentsConstants.emailRegex), Validators.required]),
    password: new FormControl('', [Validators.pattern(AuthComponentsConstants.passwordRegex), Validators.required]),
  });

  isPasswordVisible: boolean = false;
  isFormSubmitted: boolean = false;

  onSubmit() {
    this.isFormSubmitted = true;
    if (this.loginForm.valid) {
      const userLogin: LoginRequest = {
        email: this.loginForm.value.email ? this.loginForm.value.email : '',
        password: this.loginForm.value.password ? this.loginForm.value.password : '',
      }
      this.store.dispatch(login(userLogin))
    }
  }

}
