import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CovalentLoadingModule } from '@covalent/core';
import { EffectsModule } from '@ngrx/effects';
import 'rxjs/add/operator/finally';

import { StoreEffects } from './ngrx/effects';
import { SharedModule } from 'app/shared';
import { BookSearchComponent } from './components';
import { StoreRoutingModule, routedComponents } from './store-routing.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    CovalentLoadingModule,
    StoreRoutingModule,
    EffectsModule.forFeature([StoreEffects])
  ],
  declarations: [
    BookSearchComponent,
    routedComponents,
  ]
})
export class StoreModule { }
