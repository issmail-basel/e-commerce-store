import { Component, Inject, LOCALE_ID } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  FormGroupDirective,
  Validators,
} from '@angular/forms';
import { ActivatedRoute, Params } from '@angular/router';
import { ProductService } from '../../services/product.service';
import { Product } from '../../models/product';
import { switchMap } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'ecs-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss'],
})
export class ProductFormComponent {
  currentLocale!: 'en-US' | 'ar-SA';
  productForm: FormGroup = this.fb.group({
    title: ['', Validators.required],
    description: [''],
    price: ['', Validators.required],
    category: ['', Validators.required],
  });
  isEditMode = false;
  isSubmitted = false;
  productId!: string;
  emptyProductObj = {
    title: '',
    description: '',
    price: '',
    image: '',
    category: '',
  };

  categoryFormControl = new FormControl('');

  fillFormWithProduct(product: Product) {
    this.productForm.setValue({
      title: product.title,
      description: product.description,
      price: product.price,
      category: product.category,
    });
  }

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private productService: ProductService,
    private _snackBar: MatSnackBar,
    @Inject(LOCALE_ID) public locale: string
  ) {
    this.currentLocale = locale as 'en-US' | 'ar-SA';
    this.route.params.subscribe({
      next: (params: Params) => {
        if (params['id']) {
          this.isEditMode = true;
          this.productId = params['id'];
          this.productService.getSingleProducts(this.productId).subscribe({
            next: response => {
              this.fillFormWithProduct(response);
            },
            error: err => {
              console.log(err);
            },
          });
        }
      },
      error: err => {
        console.log(err);
      },
    });
    this.route.params
      .pipe(
        switchMap((param: Params) =>
          this.productService.getSingleProducts(param['id'])
        )
      )
      .subscribe({
        next: response => {
          console.log(response);
        },
        error: err => {
          console.log(err);
        },
      });
  }

  get productFormControl() {
    return this.productForm.controls;
  }

  addNew(formDirective: FormGroupDirective) {
    this.isSubmitted = true;
    if (this.productForm.valid) {
      this.productService
        .createProduct(this.productForm.value as Product)
        .subscribe({
          next: () => {
            formDirective.resetForm();
            this.isSubmitted = false;
            this._snackBar.open('Added successfully', 'close');
          },
          error: (error: Error) => {
            this._snackBar.open(error.message, 'close');
          },
        });
    }
  }

  edit() {
    this.isSubmitted = true;
    if (this.productForm.valid) {
      this.productService
        .editProduct(this.productForm.value as Partial<Product>, this.productId)
        .subscribe({
          next: response => {
            this.fillFormWithProduct(response);
            this.isSubmitted = false;
            this._snackBar.open('Updated successfully', 'close');
          },
          error: (error: Error) => {
            this._snackBar.open(error.message, 'close');
          },
        });
    }
  }
}
