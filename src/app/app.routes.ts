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
    loadComponent: () => import('./products/products.component'),
    children: [
      {
        path: '',
        title: 'Products list page',
        loadComponent: () =>
          import('./products/product-list/product-list.component'),
      },
      {
        path: 'create',
        title: 'Create product page',
        loadComponent: () =>
          import('./products/product-create/product-create.component'),
      },
      {
        path: 'update/:id',
        title: 'Update product page',
        loadComponent: () =>
          import('./products/product-update/product-update.component'),
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
