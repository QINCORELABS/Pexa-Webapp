import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccessoriescarouselComponent } from 'src/app/carouselspage/accessoriescarousel/accessoriescarousel.component';
import { RouterModule } from '@angular/router';
import { FeaturedproductsComponent } from 'src/app/carouselspage/featuredproducts/featuredproducts.component';
import { OfferedProducsComponent } from 'src/app/carouselspage/offered-producs/offered-producs.component';
import { PexaServiceCarouselComponent } from 'src/app/carouselspage/pexa-service-carousel/pexa-service-carousel.component';
import { PopularServiceCarousalComponent } from 'src/app/carouselspage/popular-service-carousal/popular-service-carousal.component';
import { ProductcarouselComponent } from 'src/app/carouselspage/productcarousel/productcarousel.component';



@NgModule({
  declarations: [AccessoriescarouselComponent, FeaturedproductsComponent, OfferedProducsComponent, PexaServiceCarouselComponent, PopularServiceCarousalComponent,ProductcarouselComponent],
  imports: [
    CommonModule,
    RouterModule

  ],
  exports: [
    AccessoriescarouselComponent, FeaturedproductsComponent, OfferedProducsComponent, PexaServiceCarouselComponent, PopularServiceCarousalComponent,ProductcarouselComponent
  ]
})
export class CarouselspageModule { }
