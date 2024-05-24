import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent {
  @Input()
  product: {
    ID: number;
    name: string;
    brand: string;
    image: string;
    in_stock: boolean;
    gender: string;
    category: string;
    price: number;
    colour: string;
    discount?: number;
  };
}
