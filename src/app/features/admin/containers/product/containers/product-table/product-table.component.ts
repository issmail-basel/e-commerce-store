import { Component } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { Observable } from 'rxjs';
import { Product } from '../../models/product';

@Component({
  selector: 'ecs-product-table',
  templateUrl: './product-table.component.html',
  styleUrls: ['./product-table.component.scss'],
})
export class ProductTableComponent {
  products$: Observable<Product[]> = this.productService.getAllProducts();

  displayedColumns: string[] = [
    'title',
    'price',
    'description',
    'category',
    'image',
  ];
  data = [];
  columns = {
    cols: ['title'],
  };

  constructor(private productService: ProductService) {}
}
