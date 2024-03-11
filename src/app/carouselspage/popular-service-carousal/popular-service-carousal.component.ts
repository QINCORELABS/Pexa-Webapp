import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-popular-service-carousal',
  templateUrl: './popular-service-carousal.component.html',
  styleUrls: ['./popular-service-carousal.component.css']
})
export class PopularServiceCarousalComponent implements OnInit {
  @ViewChild('carouselWrapper') carouselWrapper!: ElementRef;

  slides: string[] =['Slide 1', 'Slide 2', 'Slide 3', 'Slide 4', 'Slide 5','Slide 1', 'Slide 2', 'Slide 3', ]; // Example slides, replace with your data

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