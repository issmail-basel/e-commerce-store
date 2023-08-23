import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Product } from '../models/product';

const productAPI = 'products';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private http: HttpClient) {}

  searchProduct(category: string, searchValue: string): Observable<Product[]> {
    return this.http
      .get<Product[]>(productAPI)
      .pipe(
        map(products =>
          products.filter(
            product =>
              (!category || product.category === category) &&
              (!searchValue ||
                product.title
                  .toLowerCase()
                  .trim()
                  .includes(searchValue.toLowerCase().trim()))
          )
        )
      );
  }

  getProductById(id: string): Observable<Product> {
    return this.http.get<Product>(`${productAPI}/${id}`);
  }
}
