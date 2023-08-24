import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth.component';
import { LoginComponent } from './containers/login/login.component';
import { preventLoginGuard } from 'src/app/core/guards/prevent-login.guard';

const routes: Routes = [
  {
    path: '',
    component: AuthComponent,
    canActivate: [preventLoginGuard],
    children: [
      { path: 'login', component: LoginComponent },
      {
        path: '**',
        redirectTo: '/login',
        pathMatch: 'full',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthRoutingModule {}
