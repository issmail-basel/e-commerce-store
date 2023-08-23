import { Component, Input } from '@angular/core';
import { Product } from '../../models/product';

@Component({
  selector: 'ecs-products-section',
  templateUrl: './products-section.component.html',
  styleUrls: ['./products-section.component.scss'],
})
export class ProductsSectionComponent {
  @Input() products!: Product[];
}
