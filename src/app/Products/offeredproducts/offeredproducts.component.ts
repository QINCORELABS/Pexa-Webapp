import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-offeredproducts',
  templateUrl: './offeredproducts.component.html',
  styleUrls: ['./offeredproducts.component.css']
})
export class OfferedproductsComponent implements OnInit {
  products = [
    { name: 'Product 1', price: 10, imageUrl: 'assets/logo/c.svg' },
    { name: 'Product 2', price: 20, imageUrl: 'assets/product2.jpg' },
    { name: 'Product 3', price: 15, imageUrl: 'assets/product3.jpg' },
    { name: 'Product 1', price: 10, imageUrl: 'assets/product1.jpg' },
    { name: 'Product 2', price: 20, imageUrl: 'assets/product2.jpg' },
    { name: 'Product 3', price: 15, imageUrl: 'assets/product3.jpg' },
    { name: 'Product 1', price: 10, imageUrl: 'assets/product1.jpg' },
    { name: 'Product 2', price: 20, imageUrl: 'assets/product2.jpg' },
    { name: 'Product 3', price: 15, imageUrl: 'assets/product3.jpg' },
    { name: 'Product 1', price: 10, imageUrl: 'assets/product1.jpg' },
    { name: 'Product 2', price: 20, imageUrl: 'assets/product2.jpg' },
    { name: 'Product 3', price: 15, imageUrl: 'assets/product3.jpg' },
    // Add more products as needed
  ];
  addToCart(product: any) {
    // Implement your logic to add the product to the cart here
    console.log('Product added to cart:', product);
  }
  constructor() { }

  ngOnInit(): void {
  }

}
