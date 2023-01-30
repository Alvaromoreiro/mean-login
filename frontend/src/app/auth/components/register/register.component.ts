import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { registerFormInterface } from '../../models/forms.model';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

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
      console.log(this.registerForm.value);
    }
  }

}
