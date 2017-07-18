import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MdButtonModule, MdIconModule, MdMenuModule, MdTooltipModule } from '@angular/material';
const MD_MODULES = [MdButtonModule, MdIconModule, MdMenuModule, MdTooltipModule];
import { CovalentLoadingModule } from '@covalent/core';
import { TranslateModule } from '@ngx-translate/core';

import { NavigationService } from './services';
export { NavigationService };
import { throwIfAlreadyLoaded } from './module-import.guard';
import { LanguageSelectorComponent } from './components';

@NgModule({
  imports: [
    CommonModule,
    TranslateModule,
    RouterModule,
    MD_MODULES,
    CovalentLoadingModule,
  ],
  exports: [
    CovalentLoadingModule,
    LanguageSelectorComponent
  ],
  providers: [
    NavigationService
  ],
  declarations: [LanguageSelectorComponent]
})
export class CoreModule {
  constructor( @Optional() @SkipSelf() parentModule: CoreModule) {
    throwIfAlreadyLoaded(parentModule, 'CoreModule');
  }
}
