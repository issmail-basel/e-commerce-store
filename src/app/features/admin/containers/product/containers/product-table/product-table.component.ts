import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../../models/product';
import { ProductEntityService } from '../../services/product-entity.service';

@Component({
  selector: 'ecs-product-table',
  templateUrl: './product-table.component.html',
  styleUrls: ['./product-table.component.scss'],
})
export class ProductTableComponent implements OnInit {
  products$!: Observable<Product[]>;

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

  constructor(private productService: ProductEntityService) {}
  ngOnInit(): void {
    this.products$ = this.productService.entities$;
  }
}
