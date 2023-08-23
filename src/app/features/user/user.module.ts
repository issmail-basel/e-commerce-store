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

@NgModule({
  declarations: [
    UserComponent,
    HeaderComponent,
    CategoriesSectionComponent,
    CategoryCardComponent,
    ProductsPageComponent,
  ],
  imports: [CommonModule, UserRoutingModule, MatMenuModule, MatIconModule],
})
export class UserModule {}
