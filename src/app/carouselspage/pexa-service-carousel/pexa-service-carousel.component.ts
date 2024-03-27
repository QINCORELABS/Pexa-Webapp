import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { PexacarwashcarouselService } from 'src/app/Services/pexacarwashcarousel.service';

// Define an interface for the structure of car data
interface Car {
  name: string;
  _id: string;
  imageURL: string[];
}

@Component({
  selector: 'app-pexa-service-carousel',
  templateUrl: './pexa-service-carousel.component.html',
  styleUrls: ['./pexa-service-carousel.component.css']
})
export class PexaServiceCarouselComponent implements OnInit {
  @ViewChild('carouselWrapper') carouselWrapper!: ElementRef;

  slides: any[] = []; // Combined array for both slides and car data
  scrollInterval: any;

  constructor(private pexaService: PexacarwashcarouselService) { }

  ngOnInit(): void {
    this.startAutoScroll();
    this.fetchCarwashcategory();
  }

  fetchCarwashcategory(): void {
    this.pexaService.getcarcategory().subscribe(
      response => {
        const carData = response.resultData.map((car: Car) => ({ // Specify the type of car parameter
          type: 'car',
          name: car.name,
          imageURL: car.imageURL
        }));
        this.slides = [...this.slides, ...carData];
        console.log(this.slides);
      });
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
}
