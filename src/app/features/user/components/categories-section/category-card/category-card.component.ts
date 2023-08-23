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
  selectedCategory!: number | null;
  color: CategoryColors = {
    electronics: '#4682B4',
    jewelery: '#B76E79',
    "men's clothing": '#228B22',
    "women's clothing": '#E6E6FA',
  };

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.queryParams.pipe(map(value => value));
  }
}
