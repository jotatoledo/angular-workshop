import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'app/shared';
import { StoreModule } from '@ngrx/store';

import { reducers } from './ngrx/reducer';
import { BooksRoutingModule, routedComponents } from './books-routing.module';
import { BookService } from './services';
import { BookGuard } from './guards';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature('books', reducers),
    SharedModule,
    BooksRoutingModule
  ],
  declarations: [
    routedComponents
  ],
  providers: [
    BookGuard,
    BookService
  ]
})
export class BooksModule { }
