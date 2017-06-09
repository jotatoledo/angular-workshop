import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'app/shared';

import { BooksRoutingModule, routedComponents } from './books-routing.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    BooksRoutingModule
  ],
  declarations: [
    routedComponents
  ]
})
export class BooksModule { }
