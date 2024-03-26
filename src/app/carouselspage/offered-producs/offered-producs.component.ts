import { Component, OnInit } from '@angular/core';
import { OfferedService } from 'src/app/Services/offered.service';

interface HomeConsoleData {
  offered: any;
  resultData: {
    offered: {
      productId: {
        _id: string;
        name: string;
        price: number;
        offerPrice: number;

        sub_category_id: {
          name: string;
          images: string[];
        };
        imageURL: string[];
      };
    }[];
  };
}

@Component({
  selector: 'app-offered-producs',
  templateUrl: './offered-producs.component.html',
  styleUrls: ['./offered-producs.component.css']
})
export class OfferedProducsComponent implements OnInit {
  offered: any;
  addToCart(arg0: any) {
    throw new Error('Method not implemented.');
  }
  homeconsoledata!: HomeConsoleData; // Update the type of homeconsoledata

  offereddataui!: {
    offered: {
      productId: {
        offerPrice: number; _id: string; name: string; price: number; sub_category_id: { name: string; images: string[]; }; imageURL: string[];
      };
    }[];
  };
  constructor(private offeredService: OfferedService) { }

  ngOnInit(): void {
    this.fetchData();
  }
  fetchData() {
    this.offeredService.offered().subscribe((response: HomeConsoleData) => {
      this.offereddataui = response.resultData;; // Assign the response to the homeconsoledata property
      console.log(this.offereddataui); // Log the fetched data for testing
    });
  }

}
