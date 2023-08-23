import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { User } from 'src/app/core/models/User';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'ecs-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  isPassVisible = false;
  loginForm = this.fb.group({
    username: ['', Validators.required],
    password: ['', Validators.required],
  });

  constructor(
    private router: Router,
    private authService: AuthService,
    private fb: FormBuilder,
    private _snackBar: MatSnackBar
  ) {}

  get loginFormControl() {
    return this.loginForm.controls;
  }

  hasUsernameError(errorType: string): boolean {
    return this.loginFormControl.username.hasError(errorType);
  }

  hasPasswordError(errorType: string): boolean {
    return this.loginFormControl.password.hasError(errorType);
  }

  onSubmit() {
    if (this.loginForm.valid) {
      if (this.loginForm.valid) {
        this.authService
          .login(
            this.loginForm.value.username ?? '',
            this.loginForm.value.password ?? ''
          )
          .subscribe({
            next: (user: User) => {
              this.router.navigate([user.role === 'admin' ? 'admin' : '']);
            },
            error: error => {
              console.error('Error occurred during canActivate:', error);
              this._snackBar.open(error.message, 'close');
            },
          });
      }
    }
  }
}
