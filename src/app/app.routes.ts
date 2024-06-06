import { Routes } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';

export const routes: Routes = [
  {
    path: 'home',
    title: 'Home page',
    loadComponent: () => import('./home/home.component'),
  },
  {
    path: 'users',
    title: 'Users page',
    loadComponent: () => import('./users/users.component'),
  },
  {
    path: 'products',
    title: 'Products page',
    loadComponent: () => import('./products/products.component'),
    children: [
      {
        path: 'list-products',
        title: 'Products page',
        loadComponent: () =>
          import('./products/product-list/product-list.component'),
      },
    ],
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full',
  },
  {
    path: '**',
    component: NotFoundComponent,
  },
];
