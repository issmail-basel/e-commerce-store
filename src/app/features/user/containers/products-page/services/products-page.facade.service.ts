import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BehaviorSubject, combineLatest, Observable } from 'rxjs';
import { distinctUntilChanged, map, switchMap } from 'rxjs/operators';
import { Product } from '../models/product';
import { ProductService } from './product.service';
import { CategoryService } from './category.service';

export type ProductsListState = {
  products: Product[];
  categories: string[];
};

let _productsListState: ProductsListState = {
  products: [],
  categories: [],
};

@Injectable()
export class ProductsPageFacade {
  private ProductsListStore = new BehaviorSubject<ProductsListState>(
    _productsListState
  );
  private ProductsListState$ = this.ProductsListStore.asObservable();

  products$ = this.ProductsListState$.pipe(
    map(state => state.products),
    distinctUntilChanged()
  );
  categories$ = this.ProductsListState$.pipe(
    map(state => state.categories),
    distinctUntilChanged()
  );

  constructor(
    private productsService: ProductService,
    private categoryService: CategoryService,
    private route: ActivatedRoute
  ) {
    this.categoryService
      .getAllCategories()
      .subscribe((categories: string[]) => {
        this._updateState({
          products: _productsListState.products,
          categories,
        });
      });

    combineLatest([this.route.queryParams])
      .pipe(
        switchMap(([queryParams]) => {
          this._updateState({
            ..._productsListState,
          });
          return this.productsService.searchProduct(
            queryParams['category'],
            queryParams['value']
          );
        })
      )
      .subscribe((response: Product[]) => {
        console.log(response);

        this._updateState({
          products: response,
          categories: _productsListState.categories,
        });
      });
  }

  viewModel$: Observable<ProductsListState> = combineLatest([
    this.products$,
    this.categories$,
  ]).pipe(map(([products, categories]) => ({ products, categories })));

  private _updateState(productsListState: ProductsListState) {
    this.ProductsListStore.next((_productsListState = productsListState));
  }
}
