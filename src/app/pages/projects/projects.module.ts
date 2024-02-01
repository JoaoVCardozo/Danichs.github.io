import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectsComponent } from './projects.component';
import { SharedModule } from '../../shared/shared.module';


@NgModule({
  declarations: [
    ProjectsComponent
  ],
  imports: [
    CommonModule, SharedModule
  ],
  exports: [
    ProjectsComponent
  ]
})
export class ProjectsModule { }
