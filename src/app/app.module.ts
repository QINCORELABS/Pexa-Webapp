import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { DoorStepCarWashComponent } from './pages/door-step-car-wash/door-step-car-wash.component';
import { CarShoppeComponent } from './pages/car-shoppe/car-shoppe.component';
import { BookingComponent } from './pages/booking/booking.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { SupportComponent } from './pages/support/support.component';
import { FranchiseComponent } from './pages/franchise/franchise.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { FooterComponent } from './shared/footer/footer.component';
import { LoginComponent } from './pages/login/login.component';
import { PexaServiceCarouselComponent } from './pages/pexa-service-carousel/pexa-service-carousel.component';
import { PopularServiceCarousalComponent } from './pages/popular-service-carousal/popular-service-carousal.component';
import { CarwashingTableComponent } from './pages/carwashing-table/carwashing-table.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DoorStepCarWashComponent,
    CarShoppeComponent,
    BookingComponent,
    AboutUsComponent,
    SupportComponent,
    FranchiseComponent,
    NavbarComponent,
    FooterComponent,
    LoginComponent,
    PexaServiceCarouselComponent,
    PopularServiceCarousalComponent,
    CarwashingTableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
 
    
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
