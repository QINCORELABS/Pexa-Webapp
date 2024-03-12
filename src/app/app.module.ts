import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import { HomeComponent } from './pages/home/home.component';
import { DoorStepCarWashComponent } from './pages/door-step-car-wash/door-step-car-wash.component';
import { CarShoppeComponent } from './pages/car-shoppe/car-shoppe.component';
import { BookingComponent } from './pages/booking/booking.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { SupportComponent } from './pages/support/support.component';
import { FranchiseComponent } from './pages/franchise/franchise.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { FooterComponent } from './shared/footer/footer.component';
import { LoginComponent } from './pages/login/login.component';
import { PexaServiceCarouselComponent } from './carouselspage/pexa-service-carousel/pexa-service-carousel.component';
import { PopularServiceCarousalComponent } from './carouselspage/popular-service-carousal/popular-service-carousal.component';
import { CarwashingTableComponent } from './pages/carwashing-table/carwashing-table.component';
import { NavwhiteheadComponent } from './shared/navwhitehead/navwhitehead.component';
import { AccessoriescarouselComponent } from './carouselspage/accessoriescarousel/accessoriescarousel.component';
import { ProductcarouselComponent } from './carouselspage/productcarousel/productcarousel.component';
import { OfferedProducsComponent } from './carouselspage/offered-producs/offered-producs.component';
import { FeaturedproductsComponent } from './carouselspage/featuredproducts/featuredproducts.component';
import { BookNowDetailsComponent } from './cart/book-now-details/book-now-details.component';
import { BookNowAddresComponent } from './cart/book-now-addres/book-now-addres.component';
import { OrdersComponent } from './cart/orders/orders.component';
import { SelectedProductComponent } from './cart/selected-product/selected-product.component';
import { OrdertrackingComponent } from './cart/ordertracking/ordertracking.component';
import { CarwashCheckoutComponent } from './cart/carwash-checkout/carwash-checkout.component';
import { MycartComponent } from './cart/mycart/mycart.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ProductsComponent } from './Products/products/products.component';
import { OfferedproductsComponent } from './Products/offeredproducts/offeredproducts.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { NavwhitebootrapheadComponent } from './shared/navwhitebootraphead/navwhitebootraphead.component';





@NgModule({
  declarations: [
    AppComponent,
    // HomeComponent,
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
    CarwashingTableComponent,
    NavwhiteheadComponent,
    AccessoriescarouselComponent,
    ProductcarouselComponent,
    OfferedProducsComponent,
    FeaturedproductsComponent,
    BookNowDetailsComponent,
    BookNowAddresComponent,
    OrdersComponent,
    SelectedProductComponent,
    OrdertrackingComponent,
    CarwashCheckoutComponent,
    MycartComponent,
    ProductsComponent,
    OfferedproductsComponent,
    HomepageComponent,
    NavwhitebootrapheadComponent,
  
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,FormsModule
 
    
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
