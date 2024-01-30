import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AcademicComponent } from './academic.component';



@NgModule({
  declarations: [
    AcademicComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    AcademicComponent
  ]
})
export class AcademicModule { }
