import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

// INTERFACE
class Product {
  'id': number;
  'description': string;
}
@Component({
  selector: 'app-product-detail',
  imports: [],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.scss',
})
export class ProductDetailComponent {
  products: Product[] = [
    { id: 1, description: 'John' },
    { id: 2, description: 'Paul' },
    { id: 3, description: 'George' },
    { id: 4, description: 'Ringo' },
  ];
  constructor(private route: ActivatedRoute, private router: Router) {
    this.route.paramMap.subscribe((params) => {
      this.selectedProductID = Number(params.get('id'));
    });
    //
    this.currentUrl = this.router.url;
    console.log(this.router.events);
    this.router.events.subscribe((val) => {
      console.log(val);
      this.currentURL = this.router.url;
    });

    this.route.paramMap.subscribe((parameter) => {
      const id = Number(parameter.get('id'));
      this.selectedProduct = this.products.find((prod) => {
        return prod.id === id;
      });

      console.log(id, this.selectedProduct);
    });
  }

  selectedProductId?: number;
  selectedProductID?: number;
  currentUrl?: any;
  currentURL?: any;
  selectedProduct?: Product;
  display() {
    this.selectedProductId = Number(this.route.snapshot.params['id']);
  }
  ngOnInit() {
    this.display();
  }
}
