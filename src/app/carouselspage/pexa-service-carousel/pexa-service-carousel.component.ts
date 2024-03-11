import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-pexa-service-carousel',
  templateUrl: './pexa-service-carousel.component.html',
  styleUrls: ['./pexa-service-carousel.component.css']
})
export class PexaServiceCarouselComponent implements OnInit {
  @ViewChild('carouselWrapper') carouselWrapper!: ElementRef;

  slides: string[] =['Slide 1', 'Slide 2', 'Slide 3', 'Slide 4', 'Slide 5','Slide 1', 'Slide 2', 'Slide 3', 'Slide 4', 'Slide 5']; // Example slides, replace with your data

  scrollInterval: any;

  constructor() { }

  ngOnInit(): void {
    this.startAutoScroll();
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
