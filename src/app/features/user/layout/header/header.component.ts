import { DOCUMENT } from '@angular/common';
import {
  Component,
  EventEmitter,
  HostListener,
  Inject,
  Input,
  Output,
} from '@angular/core';
import { User } from 'src/app/core/models/User';
@Component({
  selector: 'ecs-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  isHeaderFixed = false;
  @Input() user!: User;
  @Output() logout = new EventEmitter();

  constructor(@Inject(DOCUMENT) private document: Document) {}

  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    const scrolltotop =
      this.document && this.document.scrollingElement
        ? this.document.scrollingElement.scrollTop
        : 0;
    if (scrolltotop > 200) {
      this.isHeaderFixed = true;
    } else {
      this.isHeaderFixed = false;
    }
  }
}
