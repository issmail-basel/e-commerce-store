import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { map } from 'rxjs/operators';
import { color } from '../../../constants/product-colors';

@Component({
  selector: 'ecs-category-card',
  templateUrl: './category-card.component.html',
  styleUrls: ['./category-card.component.scss'],
})
export class CategoryCardComponent implements OnInit {
  @Input() category!: string;
  selectedCategory!: string;
  shadow = '0px 3px 15px rgba(0,0,0,0.2)';
  color = color;

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) {}

  toggleColoredShadow($event: MouseEvent | FocusEvent, category: string) {
    this.shadow =
      $event.type == 'mouseover' || $event.type == 'focus'
        ? '0px 3px 15px ' + this.color[category]
        : '0px 3px 15px rgba(0,0,0,0.2)';
  }

  ngOnInit(): void {
    this.route.queryParams
      .pipe(map(value => value))
      .subscribe((values: Params) => {
        this.selectedCategory = values['category'] ? values['category'] : null;
      });
  }

  changeCategory(category: string) {
    if (this.selectedCategory === category) {
      this.router.navigate(['/homepage'], {
        queryParams: { category: '' },
        queryParamsHandling: 'merge',
      });
    } else {
      this.router.navigate(['/homepage'], {
        queryParams: { category },
        queryParamsHandling: 'merge',
      });
    }
  }
}
