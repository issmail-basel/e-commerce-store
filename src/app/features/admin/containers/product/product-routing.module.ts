import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductTableComponent } from './containers/product-table/product-table.component';

const routes: Routes = [{ path: '', component: ProductTableComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductRoutingModule {}
