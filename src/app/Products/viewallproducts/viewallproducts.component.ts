import { Component, OnInit } from '@angular/core';
import{ViewallproductsService}from'src/app/Services/viewallproducts.service';
@Component({
  selector: 'app-viewallproducts',
  templateUrl: './viewallproducts.component.html',
  styleUrls: ['./viewallproducts.component.css']
})
export class ViewallproductsComponent implements OnInit {
  viewall: any[] = [];

  constructor( private viewallproducts:ViewallproductsService) { }

  ngOnInit(): void {
    this.fetchviewallproducts();
  }

  fetchviewallproducts() {
    const pageNumber = 1; // Assuming you want to fetch the first page initially
    this.viewallproducts.getallproducts(pageNumber).subscribe(response => {
        this.viewall = response.resultData;
        this.viewall.forEach(product => {
            product.productId.shortDescription = product.productId.description.split(' ').slice(0, 5).join(' ');
        });
    });
}

}
