import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // Import FormsModule here
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { RegistrationFormComponent } from '../Auth/registration-form/registration-form.component'; // Adjust the path accordingly
import { ReactiveFormsModule } from '@angular/forms';
import { OtpPageComponent } from '../Auth/otp-page/otp-page.component';
import { MatExpansionModule } from '@angular/material/expansion';

@NgModule({
  declarations: [
    RegistrationFormComponent,
    OtpPageComponent,
  ],
  imports: [
    MatButtonModule,
    MatCardModule,
    MatSlideToggleModule,
    MatFormFieldModule,
    MatSelectModule,
    MatMenuModule,
    MatIconModule,
    ReactiveFormsModule,
    FormsModule // Import FormsModule here,
    
  ],
  exports: [
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatSelectModule,
    BrowserAnimationsModule,
    MatSlideToggleModule,
    MatMenuModule,
    MatIconModule,
    RegistrationFormComponent,
    OtpPageComponent,
    MatExpansionModule,

  ]
})
export class MaterialModule { }
