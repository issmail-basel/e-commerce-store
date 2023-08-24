import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const categoriesAPI = '/products/categories';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  constructor(private http: HttpClient) {}

  getAllCategories(): Observable<string[]> {
    return this.http.get<string[]>(categoriesAPI);
  }
}
