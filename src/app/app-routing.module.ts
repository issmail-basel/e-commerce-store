import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { authGuard } from './core/guards/auth.guard';

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
    path: '**',
    redirectTo: '/login',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
