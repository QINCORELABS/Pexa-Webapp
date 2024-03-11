import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { AccessoriesCarouselService } from 'src/app/Services/accessories-carousel.service';

@Component({
  selector: 'app-accessoriescarousel',
  templateUrl: './accessoriescarousel.component.html',
  styleUrls: ['./accessoriescarousel.component.css']
})
export class AccessoriescarouselComponent implements OnInit {
  @ViewChild('carouselWrapper') carouselWrapper!: ElementRef;

  slides: string[] =['Slide 1', 'Slide 2', 'Slide 3', 'Slide 4', 'Slide 5','Slide 1', 'Slide 2', 'Slide 3', 'Slide 4', 'Slide 5']; // Example slides, replace with your data

  scrollInterval: any;

  constructor(private productService: AccessoriesCarouselService) {}

  ngOnInit(): void {
    this.startAutoScroll();
    this.fetchProductCategories();
  }

  startAutoScroll(): void {
    this.scrollInterval = setInterval(() => {
      if (this.carouselWrapper) {
        this.carouselWrapper.nativeElement.scrollLeft += 1; // Adjust scroll speed as needed
      }
    }, 10); // Adjust scroll interval as needed
  }

  stopAutoScroll(): void {
    clearInterval(this.scrollInterval);
  }
  productCategories: any[] = []; // Initialize as an empty array


 


  


  fetchProductCategories() {
    this.productService.getProductCategory().subscribe(response => {
      this.productCategories = response.resultData;
      console.log(this.productCategories,'44')
    });
  }
}

