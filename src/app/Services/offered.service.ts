import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class OfferedService {

  constructor(private http: HttpClient) { }
  
  offered(): Observable<any> {
    return this.http.get<any>(`${environment.offeredproducts}/consolidated/homepage/`);
  }
}
