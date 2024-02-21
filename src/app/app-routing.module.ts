import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { DoorStepCarWashComponent } from './pages/door-step-car-wash/door-step-car-wash.component';
import { CarShoppeComponent } from './pages/car-shoppe/car-shoppe.component';
import { BookingComponent } from './pages/booking/booking.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { SupportComponent } from './pages/support/support.component';
import { FranchiseComponent } from './pages/franchise/franchise.component';
import { LoginComponent } from './pages/login/login.component';
import { PexaServiceCarouselComponent } from './pages/pexa-service-carousel/pexa-service-carousel.component';
import { PopularServiceCarousalComponent } from './pages/popular-service-carousal/popular-service-carousal.component';
import { FooterComponent } from './shared/footer/footer.component';
import { CarwashingTableComponent } from './pages/carwashing-table/carwashing-table.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'Home', component: HomeComponent },
  { path: 'CarWash', component: DoorStepCarWashComponent },
  { path: 'CarShope', component: CarShoppeComponent },
  { path: 'Booking', component: BookingComponent },
  { path: 'About', component: AboutUsComponent },
  { path: 'Support', component: SupportComponent },
  { path: 'Franchise', component: FranchiseComponent },
  { path: 'Login', component:LoginComponent },
  { path: 'PopularServices', component:PopularServiceCarousalComponent },
  { path: 'Footer', component:FooterComponent},
  { path: 'CarwashTable', component:CarwashingTableComponent}






];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
