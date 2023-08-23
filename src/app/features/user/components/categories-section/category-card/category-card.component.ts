import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';

type CategoryColors = {
  [key: string]: string;
};

@Component({
  selector: 'ecs-category-card',
  templateUrl: './category-card.component.html',
  styleUrls: ['./category-card.component.scss'],
})
export class CategoryCardComponent implements OnInit {
  @Input() category!: string;
  selectedCategory!: string;
  shadow = '0px 3px 15px rgba(0,0,0,0.2)';
  color: CategoryColors = {
    electronics: '#4682B4',
    jewelery: '#B76E79',
    "men's clothing": '#228B22',
    "women's clothing": '#9370DB',
  };

  constructor(private route: ActivatedRoute) {}

  toggleColoredShadow($event: MouseEvent | FocusEvent, category: string) {
    this.shadow =
      $event.type == 'mouseover' || $event.type == 'focus'
        ? '0px 3px 15px ' + this.color[category]
        : '0px 3px 15px rgba(0,0,0,0.2)';
  }

  ngOnInit(): void {
    this.route.queryParams.pipe(map(value => value)).subscribe(values => {
      this.selectedCategory = values['category'] ? values['category'] : null;
    });
  }
}
