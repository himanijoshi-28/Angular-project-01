import { Component } from '@angular/core';

@Component({
  selector: 'product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent {
  addToCart: number = 0;
  // name = 'Himani Joshi';
  product = {
    name: 'iphone',
    price: 999,
    color: 'Black',
    discount: 8.5,
    inStock: 5,
    pImage:
      'https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1708671939/Croma%20Assets/Communication/Mobiles/Images/300679_0_ywgnrd.png?tr=w-360',
  };
  getDiscount() {
    return (
      this.product.price - (this.product.price * this.product.discount) / 100
    );
  }
  onEventChange(event: any) {
    // return (this.name = event.target.value);
  }

  reduceOne() {
    if (this.addToCart > 0) {
      this.addToCart -= 1;
    }
  }
  addOne() {
    if (this.addToCart < this.product.inStock) {
      this.addToCart += 1;
    }
  }
}
