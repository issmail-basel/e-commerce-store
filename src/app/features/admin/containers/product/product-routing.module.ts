import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductTableComponent } from './containers/product-table/product-table.component';
import { ProductFormComponent } from './containers/product-form/product-form.component';
import { ProductsResolver } from './services/product.resolver';

const routes: Routes = [
  {
    path: '',
    component: ProductTableComponent,
    resolve: { products: ProductsResolver },
  },
  {
    path: 'add',
    component: ProductFormComponent,
    resolve: { products: ProductsResolver },
  },
  {
    path: 'edit/:id',
    component: ProductFormComponent,
    resolve: { products: ProductsResolver },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductRoutingModule {}
