import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { AuthComponent } from './auth.component';
import { MatCardModule } from '@angular/material/card';
import { LoginComponent } from './containers/login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { SharedModule } from 'src/app/shared/shared.module';
import { AuthService } from 'src/app/core/services/auth.service';

@NgModule({
  declarations: [AuthComponent, LoginComponent],
  imports: [
    CommonModule,
    AuthRoutingModule,
    ReactiveFormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatButtonModule,
    MatCheckboxModule,
    SharedModule,
  ],
})
export class AuthModule {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  static forRoot(): ModuleWithProviders<any> {
    return {
      ngModule: AuthModule,
      providers: [AuthService],
    };
  }
}
