import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomePageRoutingModule } from './home-page-routing.module';
import { HomePageComponent } from './home-page/home-page.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { CustomButtonModule } from './shared/components/custom-button/custom-button.module';

@NgModule({
  declarations: [
    HomePageComponent,
  ],
  imports: [
    CommonModule,
    HomePageRoutingModule,
    FlexLayoutModule,
    CustomButtonModule
  ]
})
export class HomePageModule { }
