import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductRoutingModule } from './product-routing.module';
import { ProductTableComponent } from './containers/product-table/product-table.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatButtonModule } from '@angular/material/button';
import { ProductFormComponent } from './containers/product-form/product-form.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import {
  EntityDataService,
  EntityDefinitionService,
  EntityMetadataMap,
} from '@ngrx/data';
import { ProductEntityService } from './services/product-entity.service';
import { ProductsResolver } from './services/product.resolver';

const entityMetaData: EntityMetadataMap = {
  Product: {},
};

@NgModule({
  declarations: [ProductTableComponent, ProductFormComponent],
  imports: [
    CommonModule,
    ProductRoutingModule,
    MatTableModule,
    FormsModule,
    ReactiveFormsModule,
    MatPaginatorModule,
    MatButtonModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
  ],
  providers: [ProductEntityService, ProductsResolver],
})
export class ProductModule {
  constructor(private eds: EntityDefinitionService) {
    eds.registerMetadataMap(entityMetaData);
  }
}
