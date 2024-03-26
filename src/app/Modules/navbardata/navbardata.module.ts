import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MakeComponent } from 'src/app/navbar data/make/make.component';
import { ModelComponent } from 'src/app/navbar data/model/model.component';



@NgModule({
  declarations: [MakeComponent,ModelComponent],
  imports: [
    CommonModule
  ],
  exports:[
    MakeComponent,
    ModelComponent
  ]
})
export class NavbardataModule { }
