import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DoorStepCarWashComponent } from './pages/door-step-car-wash/door-step-car-wash.component';
import { CarShoppeComponent } from './pages/car-shoppe/car-shoppe.component';
import { BookingComponent } from './pages/booking/booking.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { SupportComponent } from './pages/support/support.component';
import { FranchiseComponent } from './pages/franchise/franchise.component';
import { PexaServiceCarouselComponent } from './carouselspage/pexa-service-carousel/pexa-service-carousel.component';
import { PopularServiceCarousalComponent } from './carouselspage/popular-service-carousal/popular-service-carousal.component';
import { FooterComponent } from './shared/footer/footer.component';
import { CarwashingTableComponent } from './pages/carwashing-table/carwashing-table.component';
import { NavwhiteheadComponent } from './shared/navwhitehead/navwhitehead.component';
import { AccessoriescarouselComponent } from './carouselspage/accessoriescarousel/accessoriescarousel.component';
import { ProductcarouselComponent } from './carouselspage/productcarousel/productcarousel.component';
import { CarwashCheckoutComponent } from './cart/carwash-checkout/carwash-checkout.component';
import { BookNowDetailsComponent } from './cart/book-now-details/book-now-details.component';
import { SelectedProductComponent } from './cart/selected-product/selected-product.component';
import { MycartComponent } from './cart/mycart/mycart.component';
import { ProductsComponent } from './Products/products/products.component';
import { OfferedProducsComponent } from './carouselspage/offered-producs/offered-producs.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { RegistrationFormComponent } from './Auth/registration-form/registration-form.component';
import { LoginPageComponent } from './Auth/login-page/login-page.component';
import { OtpPageComponent } from './Auth/otp-page/otp-page.component'; // Import OtpPageComponent
import { LoginOtpComponent } from './Auth/login-otp/login-otp.component';
import { ViewallproductsComponent } from './Products/viewallproducts/viewallproducts.component';
import { OfferedproductsComponent } from './Products/offeredproducts/offeredproducts.component';
import { MakeComponent } from './navbar data/make/make.component';
import { ModelComponent } from './navbar data/model/model.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomepageComponent },
  { path: 'login', component: LoginPageComponent },
  { path: 'register', component: RegistrationFormComponent },
  { path: 'otp-verification', component: OtpPageComponent }, // Add route for OTP verification page
  { path: 'CarWash', component: DoorStepCarWashComponent },
  { path: 'CarShope', component: CarShoppeComponent },
  { path: 'Booking', component: BookingComponent },
  { path: 'About', component: AboutUsComponent },
  { path: 'Support', component: SupportComponent },
  { path: 'Franchise', component: FranchiseComponent },
  { path: 'PopularServices', component: PopularServiceCarousalComponent },
  { path: 'Footer', component: FooterComponent },
  { path: 'CarwashTable', component: CarwashingTableComponent },
  { path: 'navwhitehead', component: NavwhiteheadComponent },
  { path: 'acessories', component: AccessoriescarouselComponent },
  { path: 'productscarousel', component: ProductcarouselComponent },
  { path: 'carwashCheckout', component: CarwashCheckoutComponent },
  { path: 'BookingAddress', component: BookNowDetailsComponent },
  { path: 'selectedproduct', component: SelectedProductComponent },
  { path: 'mycart', component: MycartComponent },
  { path: 'Products', component: ProductsComponent },
  { path: 'offeredProducts', component: OfferedProducsComponent },
  { path: 'login_otp', component: LoginOtpComponent },
  { path: 'View_all_products', component: ViewallproductsComponent },
  { path: 'View_all_offproducts', component: OfferedproductsComponent },
  { path: 'makes', component:MakeComponent },
  { path: 'model', component:ModelComponent},



  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
