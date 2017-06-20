import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from 'app/shared';

import {
  BookSearchComponent
} from './components';
import { StoreRoutingModule, routedComponents } from './store-routing.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    StoreRoutingModule,
  ],
  declarations: [
    BookSearchComponent,
    routedComponents,
  ]
})
export class StoreModule { }
