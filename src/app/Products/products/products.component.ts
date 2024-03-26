import { Component, OnInit } from '@angular/core';
import { FeaturedproductService } from 'src/app/Services/featuredproduct.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  featuredProducts: any[] = [];
  
  constructor(private featuredproductService: FeaturedproductService) { }

  ngOnInit(): void {
    this.fetchFeaturedProducts();
  }

  fetchFeaturedProducts() {
    this.featuredproductService.getfeaturedProductCategory().subscribe(response => {
      this.featuredProducts = response.resultData;
      this.featuredProducts.forEach(product => {
        // Split the description by space and take the first 5 words
        product.productId.shortDescription = product.productId.description.split(' ').slice(0, 5).join(' ');
      });
    });
  }}
