import { Component } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent {
  product = [
    {
      ID: 1,
      name: 'Running Shoes',
      brand: 'Nike',
      image:
        'https://plus.unsplash.com/premium_photo-1661769750859-64b5f1539aa8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZHVjdCUyMGltYWdlfGVufDB8fDB8fHww',
      in_stock: true,
      gender: 'unisex',
      category: 'footwear',
      price: 120.0,
      colour: 'black',
      discount: 20,
    },
    {
      ID: 2,
      name: 'Casual Shirt',
      brand: 'Levis',
      image:
        'https://plus.unsplash.com/premium_photo-1661769750859-64b5f1539aa8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZHVjdCUyMGltYWdlfGVufDB8fDB8fHww',
      in_stock: true,
      gender: 'male',
      category: 'clothing',
      price: 45.0,
      colour: 'blue',
      discount: 15,
    },
    {
      ID: 3,
      name: 'Sports Watch',
      brand: 'Garmin',
      image:
        'https://plus.unsplash.com/premium_photo-1661769750859-64b5f1539aa8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZHVjdCUyMGltYWdlfGVufDB8fDB8fHww',
      in_stock: true,
      gender: 'unisex',
      category: 'accessories',
      price: 150.0,
      colour: 'black',
      size: 'one size',
      inventory_items_left: 15,
      slug: 'garmin-sports-watch-black',
    },
    {
      ID: 4,
      name: 'Sunglasses',
      brand: 'Ray-Ban',
      image:
        'https://plus.unsplash.com/premium_photo-1661769750859-64b5f1539aa8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZHVjdCUyMGltYWdlfGVufDB8fDB8fHww',
      in_stock: false,
      gender: 'unisex',
      category: 'accessories',
      price: 85.0,
      colour: 'brown',
      size: 'one size',
      inventory_items_left: 0,
      slug: 'rayban-sunglasses-brown',
    },
    {
      ID: 5,
      name: 'Leather Jacket',
      brand: 'Zara',
      image:
        'https://plus.unsplash.com/premium_photo-1661769750859-64b5f1539aa8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZHVjdCUyMGltYWdlfGVufDB8fDB8fHww',
      in_stock: true,
      gender: 'female',
      category: 'clothing',
      price: 200.0,
      colour: 'black',
      size: 'L',
      inventory_items_left: 10,
      slug: 'zara-leather-jacket-black-l',
    },
    {
      ID: 6,
      name: 'Yoga Mat',
      brand: 'Lululemon',
      image:
        'https://plus.unsplash.com/premium_photo-1661769750859-64b5f1539aa8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZHVjdCUyMGltYWdlfGVufDB8fDB8fHww',
      in_stock: true,
      gender: 'unisex',
      category: 'fitness',
      price: 70.0,
      colour: 'purple',
      size: 'one size',
      inventory_items_left: 20,
      slug: 'lululemon-yoga-mat-purple',
    },
    {
      ID: 7,
      name: 'Smartphone',
      brand: 'Apple',
      image:
        'https://plus.unsplash.com/premium_photo-1661769750859-64b5f1539aa8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZHVjdCUyMGltYWdlfGVufDB8fDB8fHww',
      in_stock: false,
      gender: 'unisex',
      category: 'electronics',
      price: 999.0,
      colour: 'white',
      size: '128GB',
      inventory_items_left: 0,
      slug: 'apple-iphone-white-128gb',
    },
    {
      ID: 8,
      name: 'Denim Jeans',
      brand: 'Wrangler',
      image:
        'https://plus.unsplash.com/premium_photo-1661769750859-64b5f1539aa8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZHVjdCUyMGltYWdlfGVufDB8fDB8fHww',
      in_stock: true,
      gender: 'male',
      category: 'clothing',
      price: 60.0,
      colour: 'blue',
      size: '32',
      inventory_items_left: 40,
      slug: 'wrangler-denim-jeans-blue-32',
    },
    {
      ID: 9,
      name: 'Backpack',
      brand: 'North Face',
      image:
        'https://plus.unsplash.com/premium_photo-1661769750859-64b5f1539aa8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZHVjdCUyMGltYWdlfGVufDB8fDB8fHww',
      in_stock: true,
      gender: 'unisex',
      category: 'accessories',
      price: 90.0,
      colour: 'black',
      size: 'large',
      inventory_items_left: 12,
      slug: 'north-face-backpack-black-large',
    },
    {
      ID: 10,
      name: 'Formal Shoes',
      brand: 'Clarks',
      image:
        'https://plus.unsplash.com/premium_photo-1661769750859-64b5f1539aa8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZHVjdCUyMGltYWdlfGVufDB8fDB8fHww',
      in_stock: true,
      gender: 'male',
      category: 'footwear',
      price: 130.0,
      colour: 'brown',
      size: '9',
      inventory_items_left: 18,
      slug: 'clarks-formal-shoes-brown-9',
    },
    {
      ID: 11,
      name: 'Winter Coat',
      brand: 'Patagonia',
      image:
        'https://plus.unsplash.com/premium_photo-1661769750859-64b5f1539aa8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZHVjdCUyMGltYWdlfGVufDB8fDB8fHww',
      in_stock: true,
      gender: 'female',
      category: 'clothing',
      price: 250.0,
      colour: 'red',
      size: 'M',
      inventory_items_left: 5,
      slug: 'patagonia-winter-coat-red-m',
    },
    {
      ID: 12,
      name: 'Headphones',
      brand: 'Bose',
      image:
        'https://plus.unsplash.com/premium_photo-1661769750859-64b5f1539aa8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZHVjdCUyMGltYWdlfGVufDB8fDB8fHww',
      in_stock: true,
      gender: 'unisex',
      category: 'electronics',
      price: 300.0,
      colour: 'black',
      size: 'one size',
      inventory_items_left: 8,
      slug: 'bose-headphones-black',
    },
    {
      ID: 13,
      name: 'Running Tights',
      brand: 'Adidas',
      image:
        'https://plus.unsplash.com/premium_photo-1661769750859-64b5f1539aa8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZHVjdCUyMGltYWdlfGVufDB8fDB8fHww',
      in_stock: true,
      gender: 'female',
      category: 'clothing',
      price: 55.0,
      colour: 'grey',
      size: 'S',
      inventory_items_left: 22,
      slug: 'adidas-running-tights-grey-s',
    },
    {
      ID: 14,
      name: 'Digital Camera',
      brand: 'Canon',
      image:
        'https://plus.unsplash.com/premium_photo-1661769750859-64b5f1539aa8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZHVjdCUyMGltYWdlfGVufDB8fDB8fHww',
      in_stock: true,
      gender: 'unisex',
      category: 'electronics',
      price: 450.0,
      colour: 'black',
      size: 'one size',
      inventory_items_left: 7,
      slug: 'canon-digital-camera-black',
    },
    {
      ID: 15,
      name: 'Water Bottle',
      brand: 'Hydro Flask',
      image:
        'https://plus.unsplash.com/premium_photo-1661769750859-64b5f1539aa8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZHVjdCUyMGltYWdlfGVufDB8fDB8fHww',
      in_stock: true,
      gender: 'unisex',
      category: 'fitness',
      price: 40.0,
      colour: 'blue',
      size: '32oz',
      inventory_items_left: 35,
      slug: 'hydro-flask-water-bottle-blue-32oz',
    },
    {
      ID: 16,
      name: 'Leather Wallet',
      brand: 'Tommy Hilfiger',
      image:
        'https://plus.unsplash.com/premium_photo-1661769750859-64b5f1539aa8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZHVjdCUyMGltYWdlfGVufDB8fDB8fHww',
      in_stock: true,
      gender: 'male',
      category: 'accessories',
      price: 50.0,
      colour: 'brown',
      size: 'one size',
      inventory_items_left: 25,
      slug: 'tommy-hilfiger-leather-wallet-brown',
    },
    {
      ID: 17,
      name: 'Fitness Tracker',
      brand: 'Fitbit',
      image:
        'https://plus.unsplash.com/premium_photo-1661769750859-64b5f1539aa8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZHVjdCUyMGltYWdlfGVufDB8fDB8fHww',
      in_stock: true,
      gender: 'unisex',
      category: 'electronics',
      price: 130.0,
      colour: 'black',
      size: 'one size',
      inventory_items_left: 14,
      slug: 'fitbit-fitness-tracker-black',
    },
    {
      ID: 18,
      name: 'Sneakers',
      brand: 'Puma',
      image:
        'https://plus.unsplash.com/premium_photo-1661769750859-64b5f1539aa8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZHVjdCUyMGltYWdlfGVufDB8fDB8fHww',
      in_stock: true,
      gender: 'female',
      category: 'footwear',
      price: 85.0,
      colour: 'white',
      size: '8',
      inventory_items_left: 20,
      slug: 'puma-sneakers-white-8',
    },
    {
      ID: 19,
      name: 'Laptop',
      brand: 'Dell',
      image:
        'https://plus.unsplash.com/premium_photo-1661769750859-64b5f1539aa8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZHVjdCUyMGltYWdlfGVufDB8fDB8fHww',
      in_stock: true,
      gender: 'unisex',
      category: 'electronics',
      price: 750.0,
      colour: 'silver',
      size: '15 inch',
      inventory_items_left: 10,
      slug: 'dell-laptop-silver-15-inch',
    },
    {
      ID: 20,
      name: 'Basketball',
      brand: 'Spalding',
      image:
        'https://plus.unsplash.com/premium_photo-1661769750859-64b5f1539aa8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZHVjdCUyMGltYWdlfGVufDB8fDB8fHww',
      in_stock: true,
      gender: 'unisex',
      category: 'sports',
      price: 25.0,
      colour: 'orange',
      size: '7',
      inventory_items_left: 50,
      slug: 'spalding-basketball-orange-7',
    },
  ];
  totalProductCount: number = this.product.length;
  totalProductInstock: number = this.product.filter(
    (prd) => prd.in_stock === true
  ).length;
  totalProductOutOfStock: number = this.product.filter(
    (prd) => prd.in_stock === false
  ).length;
}