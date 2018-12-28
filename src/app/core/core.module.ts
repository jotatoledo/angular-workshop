import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CovalentLoadingModule } from '@covalent/core';

import { throwIfAlreadyLoaded } from './module-import.guard';
import { HomePageComponent } from './views/home-page/home-page.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    CovalentLoadingModule
  ],
  declarations: [
    HomePageComponent
  ],
  exports: [
    HomePageComponent
  ]
})
export class CoreModule {
  constructor( @Optional() @SkipSelf() parentModule: CoreModule) {
    throwIfAlreadyLoaded(parentModule, 'CoreModule');
  }
}
