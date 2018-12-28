import { NgModule, Optional, SkipSelf } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatIconModule, MatButtonModule } from '@angular/material';
import { CovalentLoadingModule } from '@covalent/core';

import { throwIfAlreadyLoaded } from './module-import.guard';
import { HomePageComponent } from './views/home-page/home-page.component';
import { BookService, NavigationService, BookCollectionService } from './services';
import { BookGuard } from './guards';

@NgModule({
  imports: [CommonModule, RouterModule, MatIconModule, MatButtonModule, FlexLayoutModule, CovalentLoadingModule],
  declarations: [HomePageComponent],
  providers: [NavigationService, BookService, BookCollectionService, BookGuard],
  exports: [HomePageComponent]
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    throwIfAlreadyLoaded(parentModule, 'CoreModule');
  }
}
