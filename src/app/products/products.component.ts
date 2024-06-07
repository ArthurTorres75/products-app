import { Component } from '@angular/core';
import { LayoutComponent } from '../layout/layout.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [LayoutComponent, RouterModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss',
})
export default class ProductsComponent {}
