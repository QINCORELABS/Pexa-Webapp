import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookNowAddresComponent } from 'src/app/cart/book-now-addres/book-now-addres.component';
import { BookNowDetailsComponent } from 'src/app/cart/book-now-details/book-now-details.component';
import { CarwashCheckoutComponent } from 'src/app/cart/carwash-checkout/carwash-checkout.component';
import { MycartComponent } from 'src/app/cart/mycart/mycart.component';
import { CarouselspageModule } from '../carouselspage/carouselspage.module';
import { FormsModule } from '@angular/forms';
import { SelectedProductComponent } from 'src/app/cart/selected-product/selected-product.component';
import { OrdersComponent } from 'src/app/cart/orders/orders.component';
import { OrdertrackingComponent } from 'src/app/cart/ordertracking/ordertracking.component';



@NgModule({
  declarations: [
    BookNowAddresComponent,
    BookNowDetailsComponent,
    CarwashCheckoutComponent,
    MycartComponent,
    SelectedProductComponent,
    OrdersComponent,
    OrdertrackingComponent
  ],
  imports: [
    CommonModule,
    CarouselspageModule,
    FormsModule
  ],
  exports:[
    BookNowAddresComponent,
    BookNowDetailsComponent,
    CarwashCheckoutComponent,
    MycartComponent,
    SelectedProductComponent,
    OrdersComponent,
    OrdertrackingComponent
  ]
})
export class CartModule { }
