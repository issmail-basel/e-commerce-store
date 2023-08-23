import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductRoutingModule } from './product-routing.module';
import { ProductTableComponent } from './containers/product-table/product-table.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [ProductTableComponent],
  imports: [
    CommonModule,
    ProductRoutingModule,
    MatTableModule,
    MatPaginatorModule,
    MatButtonModule,
  ],
})
export class ProductModule {}
