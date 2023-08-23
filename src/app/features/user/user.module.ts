import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './user.component';
import { HeaderComponent } from './layout/header/header.component';
import { MatMenuModule } from '@angular/material/menu';
import { CategoriesSectionComponent } from './components/categories-section/categories-section.component';
import { CategoryCardComponent } from './components/categories-section/category-card/category-card.component';
import { ProductsPageComponent } from './containers/products-page/products-page.component';
import { MatIconModule } from '@angular/material/icon';
import { SearchFieldComponent } from './components/search-field/search-field.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ProductsSectionComponent } from './components/products-section/products-section.component';
import { ProductCardComponent } from './components/products-section/product-card/product-card.component';
import { ProductDetailsComponent } from './containers/product-details/product-details.component';
import { BreadcrumbComponent } from './components/breadcrumb/breadcrumb.component';
import { ProductDetailsCardComponent } from './components/product-details-card/product-details-card.component';

@NgModule({
  declarations: [
    UserComponent,
    HeaderComponent,
    CategoriesSectionComponent,
    CategoryCardComponent,
    ProductsPageComponent,
    SearchFieldComponent,
    ProductsSectionComponent,
    ProductCardComponent,
    ProductDetailsComponent,
    BreadcrumbComponent,
    ProductDetailsCardComponent,
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    MatMenuModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
  ],
})
export class UserModule {}
