import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  onSubmit() {
    throw new Error('Method not implemented.');
  }

  form = new FormGroup({
    name: new FormControl('', [Validators.pattern('[a-zA-Z0-9]+')]),
    email: new FormControl('', [Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$')]),
    password: new FormControl('', [Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})')])
  });

  isPasswordVisible: boolean = false;
  isPasswordSame: boolean = false;

  constructor() {}

  ngOnInit(): void {
  }

}
