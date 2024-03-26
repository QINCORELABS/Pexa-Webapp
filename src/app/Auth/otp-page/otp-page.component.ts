import { Component } from '@angular/core';
import { Router } from '@angular/router'; // Import Router
import { OtpVerificationService } from 'src/app/Services/otp-verification.service';

@Component({
  selector: 'app-otp-page',
  templateUrl: './otp-page.component.html',
  styleUrls: ['./otp-page.component.css']
})
export class OtpPageComponent {
  phone: string = '';
  otpCode: string = '';

  constructor(private otpVerificationService: OtpVerificationService, private router: Router) { } // Inject Router

  submitForm() {
    // Check if both phone and OTP are valid
    if (this.phone && this.otpCode) {
      console.log('Phone:', this.phone);
      console.log('OTP Code:', this.otpCode);
  
      // Call the service to verify OTP
      this.otpVerificationService.verifyOtp(this.phone, this.otpCode).subscribe(
        (response: any) => {
          console.log('Verification response:', response);
          // If OTP is successfully verified, navigate to login page
          this.router.navigate(['/login']); // Navigate to the login page
        },
        (error: any) => {
          console.error('Error occurred during verification:', error);
          // Handle error as needed
        }
      );
    } else {
      console.error('Phone number and OTP are required.');
    }
  } 
}
