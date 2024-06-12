import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { CommonModule } from '@angular/common';

// Prime NG
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { FloatLabelModule } from 'primeng/floatlabel';
import { InputTextModule } from 'primeng/inputtext';
import { DropdownChangeEvent, DropdownModule } from 'primeng/dropdown';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { TagModule } from 'primeng/tag';

// Constants
import { product } from '../../core/constants/product.constant';
import { productCategories } from '../../core/constants/categories.constant';
import { productStatuses } from '../../core/constants/productStatus.constant';
import getSeverity from '../../core/utils/getSeverity.utils';
import { InventoryStatus } from '../../core/enums/inventory.enum';
import { DropdownOptions } from '../../core/interfaces/dropdownOptions.interface';
import { RatingValues } from '../../core/constants/rating.constant';
import { ProductsService } from '../../core/services/products.service';

@Component({
  selector: 'app-product-create',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    CardModule,
    ButtonModule,
    FloatLabelModule,
    InputTextModule,
    InputTextareaModule,
    DropdownModule,
    TagModule,
  ],
  templateUrl: './product-create.component.html',
  styleUrl: './product-create.component.scss',
})
export default class ProductCreateComponent implements OnInit {
  productForm!: FormGroup;
  categories!: DropdownOptions[];
  statuses!: DropdownOptions[];
  rating!: DropdownOptions[];
  selectedStatus!: { label: string; value: string };

  constructor(
    private formBuilder: FormBuilder,
    private productService: ProductsService
  ) {}

  ngOnInit(): void {
    this.categories = productCategories;
    this.statuses = productStatuses;
    this.productForm = this.formBuilder.group({
      name: [product.name, Validators.required],
      description: [product.description],
      category: [product.category],
      inventoryStatus: [''],
      stock: [product.stock],
      rating: [product.rating],
      quantity: [product.quantity],
      price: [product.price],
      imageURL: [product.imageURL, Validators.required],
    });
    this.selectedStatus = {
      label: InventoryStatus.OutOfStock,
      value: 'outofstock',
    };
    this.rating = RatingValues;
  }

  get f() {
    return this.productForm.value;
  }

  getSeverity(status: string) {
    return getSeverity(status);
  }

  setSeverity(event: DropdownChangeEvent) {
    const { label, value } = event.value;
    this.selectedStatus = { label, value };
  }

  onSubmit() {
    if (this.productForm.invalid) return;
    const product = this.clearData();
    this.productService.createProduct(product).subscribe((data) => {
      console.log('data: ', data);
      this.productForm.reset();
    });
  }

  clearData() {
    let formData = this.productForm.value;

    for (let value in formData) {
      if (formData[value] === '' || formData[value] === 0) {
        delete formData[value];
      }

      if (typeof formData[value] === 'object') {
        formData[value] = formData[value].value;
      }
    }
    console.log('data: ', formData);
    return formData;
  }
}
