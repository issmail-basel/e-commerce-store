import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LanguageSwitcherComponent } from './language-switcher/language-switcher.component';

import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [LanguageSwitcherComponent],
  imports: [CommonModule, MatButtonModule],
  exports: [LanguageSwitcherComponent],
})
export class SharedModule {}
