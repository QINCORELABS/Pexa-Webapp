import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router'; // Import Router
import { RegistrationService } from '../../Services/registration.service';

@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.css'],
})
export class RegistrationFormComponent implements OnInit {

  form!: FormGroup; // Using definite assignment assertion

  @Input() error: string | null | undefined;
  @Output() submitEM = new EventEmitter();

  constructor(
    private router: Router, // Inject Router
    private registrationService: RegistrationService
  ) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      phoneNumber: new FormControl('', [
        Validators.required,
        Validators.pattern('^[0-9]{10}$') // assuming a 10-digit phone number
      ]),
    });
  }

  submit() {
    if (this.form.valid) {
      const phoneNumber = this.form.get('phoneNumber')?.value;

      this.registrationService.generateOTP(phoneNumber).subscribe(
        otpData => {
          console.log('OTP generated successfully:', otpData);
          // Store phone number and OTP in local storage
          localStorage.setItem('phoneNumber', phoneNumber);
          localStorage.setItem('otp', otpData); // Assuming OTP is returned as a string
          // Navigate to OTP verification page
          this.router.navigate(['/otp-verification']);
        },
        error => {
          console.error('Error generating OTP:', error);
          // Handle error as needed
        }
      );
    }
  }
}
