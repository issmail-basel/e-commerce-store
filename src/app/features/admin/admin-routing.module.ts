import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { DashboardComponent } from './containers/dashboard/dashboard.component';

const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    canActivate: [],
    children: [
      { path: '', component: DashboardComponent },
      {
        path: 'products',
        loadChildren: () =>
          import('./containers/product/product.module').then(
            m => m.ProductModule
          ),
      },
      {
        path: '**',
        redirectTo: '/admin',
        pathMatch: 'full',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
