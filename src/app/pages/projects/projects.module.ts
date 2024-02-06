import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectsComponent } from './projects.component';
import { SharedModule } from '../../shared/shared.module';
import { LanguageButtonComponent } from './Components/language-button/language-button.component';
import { ProjectCardComponent } from './Components/project-card/project-card.component';


@NgModule({
  declarations: [
    ProjectsComponent,
    LanguageButtonComponent,
    ProjectCardComponent
  ],
  imports: [
    CommonModule, SharedModule
  ],
  exports: [
    ProjectsComponent
  ]
})
export class ProjectsModule { }
