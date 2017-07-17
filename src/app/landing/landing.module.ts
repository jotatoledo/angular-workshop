import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from 'app/shared';
import { LandingRoutingModule, routedComponents } from './landing-routing.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    LandingRoutingModule
  ],
  declarations: [
    routedComponents
  ]
})
export class LandingModule { }
