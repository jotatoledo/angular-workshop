import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from 'app/shared';
import { CollectionRoutingModule, routedComponents } from './collection-routing.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    CollectionRoutingModule
  ],
  declarations: [
    routedComponents
  ]
})
export class CollectionModule { }
