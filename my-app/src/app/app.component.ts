import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet, Router } from '@angular/router';

// INTERFACE
class Product {
  'id': number;
  'description': string;
}

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NgFor],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'my-app';
  constructor(private router: Router) {}
  selectedProd?: Product;
  selectedProdId?: number;
  products: Product[] = [
    { id: 1, description: 'John' },
    { id: 2, description: 'Paul' },
    { id: 3, description: 'George' },
    { id: 4, description: 'Ringo' },
  ];
  onSelect(prod: Product) {
    this.selectedProd = prod;
    this.router.navigate(['/product', prod.id]);
  }
}
