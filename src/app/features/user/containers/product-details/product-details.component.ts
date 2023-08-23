import { Component } from '@angular/core';
import {
  ProductDetailsFacade,
  ProductState,
} from './product-details.facade.service';
import { Observable } from 'rxjs';
import { transparentColor } from '../../constants/product-colors';

@Component({
  selector: 'ecs-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss'],
  providers: [ProductDetailsFacade],
})
export class ProductDetailsComponent {
  productDetailsState$: Observable<ProductState> =
    this.productDetailsFacade.viewModel$;
  transparentColor = transparentColor;
  constructor(private productDetailsFacade: ProductDetailsFacade) {}
}
