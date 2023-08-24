import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductTableComponent } from './containers/product-table/product-table.component';
import { ProductFormComponent } from './containers/product-form/product-form.component';

const routes: Routes = [
  { path: '', component: ProductTableComponent },
  {
    path: 'add',
    component: ProductFormComponent,
  },
  {
    path: 'edit/:id',
    component: ProductFormComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductRoutingModule {}
