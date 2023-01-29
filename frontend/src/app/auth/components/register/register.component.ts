import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  private passwordMatchValidator: ValidationErrors = (form: FormGroup) => {
    if (form.get('password')?.value !== form.get('passwordConfirm')?.value) {
      return { passwordMismatch: true };
    }

    return null;
  };

  public registerForm = new FormGroup<{
    username: FormControl<string | null>,
    email: FormControl<string | null>,
    password: FormControl<string | null>,
    passwordConfirm: FormControl<string | null>
  }>({
    username: new FormControl('', [Validators.pattern('[a-zA-Z0-9]+'), Validators.required]),
    email: new FormControl('', [Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$'), Validators.required]),
    password: new FormControl('', [Validators.pattern('^(?=.*\\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$'), Validators.required]),
    passwordConfirm: new FormControl('', [Validators.pattern('^(?=.*\\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$'), Validators.required])
  }, this.passwordMatchValidator);


  isPasswordVisible: boolean = false;
  isFormSubmitted: boolean = false;

  constructor() {}

  ngOnInit(): void {
  }

  onSubmit() {
    this.isFormSubmitted = true;
    console.log(this.registerForm);
  }

}
