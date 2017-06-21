import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CovalentLoadingModule } from '@covalent/core';

import { NavigationService } from './services';
export { NavigationService };

import { throwIfAlreadyLoaded } from './module-import-guard';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    CovalentLoadingModule
  ],
  exports: [
    CovalentLoadingModule
  ],
  providers: [
    NavigationService
  ],
  declarations: []
})
export class CoreModule {
  constructor( @Optional() @SkipSelf() parentModule: CoreModule) {
    throwIfAlreadyLoaded(parentModule, 'CoreModule');
  }
}
