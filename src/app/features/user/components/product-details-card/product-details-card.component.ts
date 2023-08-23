import { Component, Input } from '@angular/core';
import { Product } from '../../models/product';

@Component({
  selector: 'ecs-product-details-card',
  templateUrl: './product-details-card.component.html',
  styleUrls: ['./product-details-card.component.scss'],
})
export class ProductDetailsCardComponent {
  @Input() product!: Product;
}
