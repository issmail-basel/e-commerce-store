import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { authGuard } from './core/guards/auth.guard';
import { preventLoginGuard } from './core/guards/prevent-login.guard';

const routes: Routes = [
  {
    path: 'homepage',
    canActivate: [authGuard],
    data: { role: 'user' },
    loadChildren: () =>
      import('./features/user/user.module').then(m => m.UserModule),
  },
  {
    path: 'admin',
    data: { role: 'admin' },
    canActivate: [authGuard],
    loadChildren: () =>
      import('./features/admin/admin.module').then(m => m.AdminModule),
  },
  {
    path: 'auth',
    canActivate: [preventLoginGuard],
    loadChildren: () =>
      import('./features/auth/auth.module').then(m => m.AuthModule),
  },
  {
    path: '**',
    redirectTo: '/auth/login',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
