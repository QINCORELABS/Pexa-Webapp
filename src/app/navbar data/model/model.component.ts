import { Component, OnInit } from '@angular/core';
import { ModelService } from 'src/app/Services/model.service';

@Component({
  selector: 'app-model',
  templateUrl: './model.component.html',
  styleUrls: ['./model.component.css']
})
export class ModelComponent implements OnInit {
  carsModel: any[] = []; // Assuming 'Car' type is not defined

  constructor(private modelService: ModelService) { }

  ngOnInit(): void {
    this.fetchModel();
  }

  fetchModel() {
    this.modelService.getModel().subscribe(
      response => {
         this.carsModel = response.resultData;
         console.log(this.carsModel);
      }
    );
  }

}
