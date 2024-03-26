import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from 'src/app/Products/products/products.component';
import { ViewallproductsComponent } from 'src/app/Products/viewallproducts/viewallproducts.component';
import { OfferedproductsComponent } from 'src/app/Products/offeredproducts/offeredproducts.component';



@NgModule({
  declarations: [
OfferedproductsComponent,
    ProductsComponent,
    ViewallproductsComponent
  ],
  imports: [
    CommonModule,
    
  ],
  exports:[
    ProductsComponent,
    ViewallproductsComponent,
    OfferedproductsComponent
  ]
})
export class ProductsModule { }
