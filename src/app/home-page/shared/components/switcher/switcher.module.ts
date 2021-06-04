import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import { CustomswitchComponent } from './customswitch/customswitch.component';



@NgModule({
  declarations: [ CustomswitchComponent],
  imports: [
    CommonModule,
    MatSlideToggleModule
  ],
  exports: [ CustomswitchComponent ]
})
export class SwitcherModule { }
