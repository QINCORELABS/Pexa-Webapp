import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private getOTPUrl = environment.loginUrl;

  constructor(private http: HttpClient) { }

  getOTP(data: any): Observable<any> {
    return this.http.post<any>(this.getOTPUrl, data);
  }
}
