import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CovalentLoadingModule } from '@covalent/core';

import { SharedModule } from 'app/shared';
import { BookSearchComponent } from './components';
import { StoreRoutingModule, routedComponents } from './store-routing.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    CovalentLoadingModule,
    StoreRoutingModule
  ],
  declarations: [BookSearchComponent, routedComponents]
})
export class StoreModule {}
