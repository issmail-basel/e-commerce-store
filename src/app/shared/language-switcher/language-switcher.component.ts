import { Location } from '@angular/common';
import { Component, Inject, LOCALE_ID } from '@angular/core';
import { environment } from 'src/environments/environment.development';

@Component({
  selector: 'ecs-language-switcher',
  templateUrl: './language-switcher.component.html',
  styleUrls: ['./language-switcher.component.scss'],
})
export class LanguageSwitcherComponent {
  currentLocale: 'en-US' | 'ar-SA';

  constructor(
    @Inject(LOCALE_ID) public locale: string,
    private location: Location
  ) {
    this.currentLocale = locale as 'en-US' | 'ar-SA';
  }

  changeLanguage(lang: 'en-US' | 'ar-SA') {
    if (this.currentLocale === lang) return;
    if (lang === 'ar-SA') {
      window.location.href =
        environment.arabicWebsiteBaseURL + this.location.path();
    } else {
      window.location.href =
        environment.englishWebsiteBaseURL + this.location.path();
    }
  }
}
