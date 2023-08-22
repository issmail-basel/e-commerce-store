import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'ecs-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  isPassVisible = false;
  loginForm = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', Validators.required],
  });

  constructor(private fb: FormBuilder) {}

  get loginFormControl() {
    return this.loginForm.controls;
  }

  hasEmailError(errorType: string): boolean {
    return this.loginFormControl.email.hasError(errorType);
  }

  hasPasswordError(errorType: string): boolean {
    return this.loginFormControl.password.hasError(errorType);
  }

  onSubmit() {
    if (this.loginForm.valid) {
      // TODO: implement
      console.log('Form Submitted Successfully');
    }
  }
}
