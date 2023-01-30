import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { registerFormInterface } from 'src/app/auth/models/forms.model';

@Component({
  selector: 'app-register-form-errors',
  template: `
  <div
    class="col-12 m-2 flex-wrap p-message p-message-error animate__animated animate__fadeIn animate__faster"
    *ngIf="isFormSubmitted && registerForm?.invalid"
  >
    <p class="mt-2 " *ngIf="registerForm?.controls?.username?.errors?.['pattern']" >Incorrect username format</p>
    <p class="mt-2 " *ngIf="registerForm?.controls?.username?.errors?.['required']"  >Username required</p>
    <p class="mt-2 " *ngIf="registerForm?.controls?.email?.errors?.['pattern']"  >Incorrect email format, please use: email@email.com</p>
    <p class="mt-2 " *ngIf="registerForm?.controls?.email?.errors?.['required']"  >Email required</p>
    <p class="mt-2 " *ngIf="registerForm?.controls?.password?.errors?.['pattern']"  >Incorrect password format</p>
    <p class="mt-2 " *ngIf="registerForm?.controls?.password?.errors?.['required']"  >Password required</p>
    <p class="mt-2 " *ngIf="registerForm?.errors?.['passwordMismatch']"  >Passwords entered are not the same</p>
  </div>
  `,
  styleUrls: ['./register-form-errors.component.css']
})
export class RegisterFormErrorsComponent implements OnInit {

  @Input() isFormSubmitted: boolean = false;
  @Input() registerForm: FormGroup<registerFormInterface> | undefined;

  constructor() {}

  ngOnInit(): void {
  }

}
