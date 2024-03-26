import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from './material/material.module';
import { AuthModule } from './Modules/auth/auth.module';
import { CarouselspageModule } from './Modules/carouselspage/carouselspage.module';
import { PagesModule } from './Modules/pages/pages.module';
import { CartModule } from './Modules/cart/cart.module';
import { NavbardataModule } from './Modules/navbardata/navbardata.module';
import { ProductsModule } from './Modules/products/products.module';
import { SharedModule } from './Modules/shared/shared.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    MaterialModule,
    AuthModule,
    CarouselspageModule,
    PagesModule,
    CartModule,
    NavbardataModule,
    ProductsModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
