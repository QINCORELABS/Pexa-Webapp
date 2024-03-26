import { Component } from '@angular/core';
import { LoginService } from 'src/app/Services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent {
  phone: string = '';
  loginType: string = 'customer';

  constructor(private loginService: LoginService, private router: Router) { }

  submitForm() {
    // Call the service method to get OTP
    this.loginService.getOTP({ phone: this.phone, loginType: this.loginType }).subscribe(
      response => {
        console.log('OTP sent successfully:', response);
        // Handle OTP sent successfully
         // Navigate to the login_otp page upon successful OTP sent
         this.router.navigate(['/login_otp']);
      },
      error => {
        console.error('Failed to get OTP:', error);
        // Handle error
      }
    );
  }
}
