import { Component, Input } from '@angular/core';
import { Product } from '../../../containers/products-page/models/product';
import { transparentColor } from '../../../constants/product-colors';

@Component({
  selector: 'ecs-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss'],
})
export class ProductCardComponent {
  @Input() product!: Product;
  transparentColor = transparentColor;
}
