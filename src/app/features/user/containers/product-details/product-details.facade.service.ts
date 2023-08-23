import { Injectable, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BehaviorSubject, combineLatest, Observable, Subscription } from 'rxjs';
import { distinctUntilChanged, map, switchMap } from 'rxjs/operators';
import { Product } from '../../models/product';
import { ProductService } from '../../services/product.service';

export type ProductState = Product | null;
let _productState: ProductState = null;

@Injectable()
export class ProductDetailsFacade implements OnDestroy {
  private ProductStore = new BehaviorSubject<ProductState>(_productState);
  private ProductState$ = this.ProductStore.asObservable();
  detailsSubscribtion: Subscription;

  product$ = this.ProductState$.pipe(
    map(state => state),
    distinctUntilChanged()
  );

  constructor(
    private productsService: ProductService,
    private route: ActivatedRoute
  ) {
    this.detailsSubscribtion = combineLatest([this.route.params])
      .pipe(
        switchMap(([params]) => {
          return this.productsService.getProductById(params['id']);
        })
      )
      .subscribe((product: Product) => {
        this._updateState(product);
      });
  }
  ngOnDestroy(): void {
    this.detailsSubscribtion.unsubscribe();
  }

  viewModel$: Observable<ProductState> = combineLatest([this.product$]).pipe(
    map(([product]) => product)
  );

  private _updateState(productState: ProductState) {
    this.ProductStore.next((_productState = productState));
  }

  getStateSnapshot(): ProductState {
    return _productState;
  }
}
