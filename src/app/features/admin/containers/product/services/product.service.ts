import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../models/product';

const productAPI = 'products';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private http: HttpClient) {}

  getAllProducts(limit = 20): Observable<Product[]> {
    return this.http.get<Product[]>(productAPI, { params: { limit } });
  }

  getSingleProducts(id: string): Observable<Product> {
    return this.http.get<Product>(`${productAPI}/${id}`);
  }
}
