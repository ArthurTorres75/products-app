import { Component, OnInit } from '@angular/core';
import { LayoutComponent } from '../layout/layout.component';

@Component({
  selector: 'home-app',
  standalone: true,
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  imports: [LayoutComponent],
})
export class HomeComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
