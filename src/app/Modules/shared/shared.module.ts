import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from 'src/app/shared/navbar/navbar.component';
import { RouterModule } from '@angular/router';
import { FooterComponent } from 'src/app/shared/footer/footer.component';
import { NavwhiteheadComponent } from 'src/app/shared/navwhitehead/navwhitehead.component';
import { MaterialModule } from 'src/app/material/material.module';
import { FormsModule } from '@angular/forms';
import { NavwhitebootrapheadComponent } from 'src/app/shared/navwhitebootraphead/navwhitebootraphead.component';



@NgModule({
  declarations: [
    NavbarComponent,
    FooterComponent,
    NavwhiteheadComponent,
    NavwhitebootrapheadComponent

  ],
  imports: [
    CommonModule,
    RouterModule,
    MaterialModule,
    FormsModule

  ],
  exports:[
    NavbarComponent,
    FooterComponent,
    NavwhiteheadComponent,
    NavwhitebootrapheadComponent

  ]
})
export class SharedModule { }
