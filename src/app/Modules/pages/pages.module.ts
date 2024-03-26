import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutUsComponent } from 'src/app/pages/about-us/about-us.component';
import { BookingComponent } from 'src/app/pages/booking/booking.component';
import { CarShoppeComponent } from 'src/app/pages/car-shoppe/car-shoppe.component';
import { RouterModule } from '@angular/router';
import { CarouselspageModule } from '../carouselspage/carouselspage.module';
import { CarwashingTableComponent } from 'src/app/pages/carwashing-table/carwashing-table.component';
import { DoorStepCarWashComponent } from 'src/app/pages/door-step-car-wash/door-step-car-wash.component';
import { FranchiseComponent } from 'src/app/pages/franchise/franchise.component';
import { HomepageComponent } from 'src/app/pages/homepage/homepage.component';
import { SupportComponent } from 'src/app/pages/support/support.component';



@NgModule({
  declarations: [AboutUsComponent, BookingComponent, CarShoppeComponent,CarwashingTableComponent,DoorStepCarWashComponent,FranchiseComponent,HomepageComponent,SupportComponent],
  imports: [
    CommonModule,
    RouterModule, CarouselspageModule
  ],
  exports: [
    AboutUsComponent, BookingComponent, CarShoppeComponent,CarwashingTableComponent,DoorStepCarWashComponent,FranchiseComponent,HomepageComponent,SupportComponent

  ]
})
export class PagesModule { }
