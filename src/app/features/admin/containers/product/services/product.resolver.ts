import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { filter, first, map, tap } from 'rxjs/operators';
import { ProductEntityService } from './product-entity.service';

@Injectable()
export class ProductsResolver {
  constructor(private productService: ProductEntityService) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> {
    return this.productService.loaded$.pipe(
      tap(loaded => {
        console.log(loaded);

        if (!loaded) {
          this.productService.getAll();
        }
      }),
      filter(loaded => !!loaded),
      first()
    );
  }
}
