import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EffectsModule } from '@ngrx/effects';

import { CollectionEffects } from './ngrx/effects';
import { SharedModule } from 'app/shared';
import { CollectionRoutingModule, routedComponents } from './collection-routing.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    EffectsModule.forFeature([CollectionEffects]),
    CollectionRoutingModule
  ],
  declarations: [
    routedComponents
  ]
})
export class CollectionModule { }
