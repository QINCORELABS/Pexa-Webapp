import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class FeaturedproductService {

  constructor(private http: HttpClient) { }
  getfeaturedProductCategory(): Observable<any> {
        return this.http.get<any>(`${environment.featuredproduct}/feature/all/`);
      }


      // getFeaturedProducts(): Observable<any> {
      //   const url = `${this.baseUrl}/v1.0/feature/all`;
      //   return this.http.get(url);
      // }


      
}



