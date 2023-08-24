import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../../models/product';
import { ProductEntityService } from '../../services/product-entity.service';
import { MatSnackBar } from '@angular/material/snack-bar';

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
    'action',
  ];
  data = [];
  columns = {
    cols: ['title'],
  };

  constructor(
    private productService: ProductEntityService,
    private _snackBar: MatSnackBar
  ) {}
  ngOnInit(): void {
    this.products$ = this.productService.entities$;
  }

  deleteProduct(product: Product) {
    this.productService.delete(product).subscribe({
      next: () => {
        this._snackBar.open('Deleted successfully', 'close');
      },
      error: (error: Error) => {
        this._snackBar.open(error.message, 'close');
      },
    });
  }
}
