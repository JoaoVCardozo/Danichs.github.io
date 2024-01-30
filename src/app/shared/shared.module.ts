import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopBarModule } from './top-bar/top-bar.module';
import { TopBarComponent } from './top-bar/top-bar.component';
import { BottomBarModule } from './bottom-bar/bottom-bar.module';
import { BottomBarComponent } from './bottom-bar/bottom-bar.component';



@NgModule({
  declarations: [

  ],
  imports: [
    CommonModule, TopBarModule, BottomBarModule
  ],
  exports: [
    TopBarComponent, BottomBarComponent
  ]
})
export class SharedModule { }
