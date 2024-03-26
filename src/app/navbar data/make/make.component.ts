import { Component, OnInit } from '@angular/core';
import { MakeService } from 'src/app/Services/make.service';

@Component({
  selector: 'app-make',
  templateUrl: './make.component.html',
  styleUrls: ['./make.component.css']
})
export class MakeComponent implements OnInit {

  carsList: any[] = []; // Assuming 'Car' type is not defined

  constructor(private makeService: MakeService) { }

  ngOnInit(): void {
    this.fetchMakes();
  }

  fetchMakes() {
    this.makeService.getMakes().subscribe(
      response => {
         this.carsList = response.resultData;
         console.log(this.carsList);
      }
    );
  }
}
