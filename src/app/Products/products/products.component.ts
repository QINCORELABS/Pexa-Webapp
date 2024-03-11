import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products = [
    { name: 'Product 1', price: 10, imageUrl: 'assets/logo/car.svg' },
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
  constructor() { }

  ngOnInit(): void {
  }

}
