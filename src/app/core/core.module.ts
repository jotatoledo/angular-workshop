import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CovalentLoadingModule } from '@covalent/core';

import { NavigationService } from './services';
export { NavigationService };

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
export class CoreModule { }
