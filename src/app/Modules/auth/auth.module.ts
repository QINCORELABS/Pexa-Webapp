import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input'; // Import Angular Material modules
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { LoginOtpComponent } from 'src/app/Auth/login-otp/login-otp.component';
import { LoginPageComponent } from 'src/app/Auth/login-page/login-page.component';
import { OtpPageComponent } from 'src/app/Auth/otp-page/otp-page.component';
import { RegistrationFormComponent } from 'src/app/Auth/registration-form/registration-form.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    LoginOtpComponent,
    LoginPageComponent,
    OtpPageComponent,
    RegistrationFormComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    MatInputModule, // Add Angular Material modules here
    MatCardModule,
    MatFormFieldModule,
    MatIconModule,
    MatButtonModule,
    MatSelectModule,
    ReactiveFormsModule,
  ],
  exports:[
    LoginOtpComponent,
    LoginPageComponent,
    OtpPageComponent,
    RegistrationFormComponent,
    MatInputModule, // Export Angular Material modules
    MatCardModule,
    MatFormFieldModule,
    MatIconModule,
    MatButtonModule,
    MatSelectModule
  ]
})
export class AuthModule { }
