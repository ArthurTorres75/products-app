// Libraries
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

// environment variables
import { environment } from '../../../environments/environment';

// Interfaces
import { IProduct } from '../interfaces/product.interface';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  readonly productApi = `${environment.apiUrl}product`;
  constructor(private http: HttpClient) {}

  createProduct(product: IProduct) {
    return this.http.post(`${this.productApi}/create`, product);
  }

  getProducts(): Observable<IProduct[]> {
    return this.http.get<IProduct[]>(`${this.productApi}/`);
  }

  getProduct(productId: string) {
    return this.http.get(`${this.productApi}/${productId}`);
  }

  updateProduct(productId: string, product: IProduct) {
    return this.http.put(`${this.productApi}/update/`, product);
  }

  deleteProduct(productId: string) {
    return this.http.delete(`${this.productApi}/${productId}`);
  }
}
