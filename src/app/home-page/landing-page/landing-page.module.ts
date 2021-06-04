import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LandingPageRoutingModule } from './landing-page-routing.module';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ElilgibilityCriteriaComponent } from './elilgibility-criteria/elilgibility-criteria.component';
import { FeatureListComponent } from './feature-list/feature-list.component';
import { FeatureCardComponent } from './feature-card/feature-card.component';
import { CustomButtonModule } from '../shared/components/custom-button/custom-button.module';
import { CustomSliderModuleModule } from '../shared/components/custom-slider-module/custom-slider-module.module';
import { SwitcherModule } from '../shared/components/switcher/switcher.module';

@NgModule({
  declarations: [
    LandingPageComponent,
    ElilgibilityCriteriaComponent,
    FeatureListComponent,
    FeatureCardComponent
  ],
  imports: [
    CommonModule,
    LandingPageRoutingModule,
    FlexLayoutModule,
    CustomButtonModule,
    CustomSliderModuleModule,
    SwitcherModule
  ]
})
export class LandingPageModule { }
