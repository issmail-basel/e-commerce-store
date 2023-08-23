import { Component } from '@angular/core';
import {
  ProductsListState,
  ProductsPageFacade,
} from './products-page.facade.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'ecs-products-page',
  templateUrl: './products-page.component.html',
  styleUrls: ['./products-page.component.scss'],
  providers: [ProductsPageFacade],
})
export class ProductsPageComponent {
  productsListState$: Observable<ProductsListState> =
    this.productsPageFacade.viewModel$;
  constructor(private productsPageFacade: ProductsPageFacade) {}
}
