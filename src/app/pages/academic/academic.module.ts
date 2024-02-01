import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AcademicComponent } from './academic.component';
import { SharedModule } from '../../shared/shared.module';



@NgModule({
  declarations: [
    AcademicComponent
  ],
  imports: [
    CommonModule, SharedModule
  ],
  exports:[
    AcademicComponent
  ]
})
export class AcademicModule { }
