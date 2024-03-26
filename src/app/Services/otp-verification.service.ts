import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class OtpVerificationService {
  private verifyOtpUrl = environment.customBaseUrl; // Append the endpoint here

  constructor(private http: HttpClient) { }

  verifyOtp(phoneNumber: string, otpCode: string): Observable<any> {
    const body = { phone: phoneNumber, otpCode: otpCode };
    const headers = new HttpHeaders().set('Content-Type', 'application/json'); // Set content type header

    return this.http.post<any>(this.verifyOtpUrl, body, { headers }).pipe(
      catchError(this.handleError)
    );
}


  private handleError(error: any) {
    let errorMessage = 'An error occurred while verifying OTP.';

    if (error.error instanceof ErrorEvent) {
      // Client-side error
      errorMessage = error.error.message;
    } else {
      // Server-side error
      errorMessage = `Server returned code: ${error.status}, error message is: ${error.message}`;
    }

    console.error(errorMessage);
    return throwError(errorMessage);
  }
}
