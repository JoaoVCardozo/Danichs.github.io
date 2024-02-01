import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopBarComponent } from './top-bar.component';
import { ButtonPageComponent } from './components/button-page/button-page.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    TopBarComponent
  ],
  imports: [
    CommonModule, ButtonPageComponent
  ],
  exports: [
    TopBarComponent
  ]
})
export class TopBarModule { }
