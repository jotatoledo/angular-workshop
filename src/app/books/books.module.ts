import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'app/shared';

import { BooksRoutingModule, routedComponents } from './books-routing.module';

import { BookService } from './services';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    BooksRoutingModule
  ],
  declarations: [
    routedComponents
  ],
  providers: [
    BookService
  ]
})
export class BooksModule { }
