import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatSliderModule} from '@angular/material/slider';
import { SliderComponent } from './slider/slider.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [ SliderComponent ],
  imports: [
    CommonModule,
    MatSliderModule,
    FormsModule
  ],
  exports: [
    SliderComponent
  ]
})
export class CustomSliderModuleModule { }
