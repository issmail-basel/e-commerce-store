import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './user.component';
import { HeaderComponent } from './layout/header/header.component';
import { MatMenuModule } from '@angular/material/menu';

@NgModule({
  declarations: [UserComponent, HeaderComponent],
  imports: [CommonModule, UserRoutingModule, MatMenuModule],
})
export class UserModule {}
