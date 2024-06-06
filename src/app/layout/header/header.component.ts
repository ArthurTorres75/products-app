import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { BreadcrumbModule } from 'primeng/breadcrumb';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [BreadcrumbModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent implements OnInit {
  items: MenuItem[] | undefined;
  home: MenuItem | undefined;

  ngOnInit(): void {
    this.items = [
      {
        label: 'Users',
        icon: 'pi pi-users',
        routerLink: '/users',
      },
      {
        label: 'Products',
        icon: 'pi pi-shopping-cart',
        routerLink: '/products',
      },
    ];
    this.home = {
      label: 'Home',
      icon: 'pi pi-home',
      routerLink: '/home',
    };
  }
}
