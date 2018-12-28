import { NgModule } from '@angular/core';
import { CovalentLoadingModule } from '@covalent/core';

import { SharedModule } from '@ws/shared';
import { StoreRoutingModule, routedComponents } from './store-routing.module';
import { BookSearchComponent } from './components/book-search/book-search.component';

@NgModule({
  imports: [
    SharedModule,
    CovalentLoadingModule,
    StoreRoutingModule
  ],
  declarations: [BookSearchComponent, routedComponents]
})
export class StoreModule {}
