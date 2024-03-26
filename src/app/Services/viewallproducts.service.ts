import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
// http://localhost:4002/v1.0/feature/all

@Injectable({
  providedIn: 'root'
})
export class ViewallproductsService {

  constructor(private http: HttpClient) { }
  // getallproducts(): Observable<any> {
  //       return this.http.get<any>(`${environment.allproducts}/product/all/:page`);
  //     }
      getallproducts(page: number): Observable<any> {
        return this.http.get<any>(`${environment.allproducts}/product/all/${page}`);
    }
    

      
}

