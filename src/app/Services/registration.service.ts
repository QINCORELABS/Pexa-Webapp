import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  generateOTP(phoneNumber: string): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
  
    const body = { phone: phoneNumber }; // Construct the request body
  
    return this.http.post<any>(this.apiUrl, body, httpOptions)
      .pipe(
        catchError(error => {
          console.error('Error generating OTP:', error);
          return throwError('Failed to generate OTP');
        })
      );
  }
  
}
