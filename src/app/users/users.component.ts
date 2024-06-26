import { Component } from '@angular/core';
import { LayoutComponent } from '../layout/layout.component';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [LayoutComponent],
  templateUrl: './users.component.html',
  styleUrl: './users.component.scss',
})
export default class UsersComponent {}
