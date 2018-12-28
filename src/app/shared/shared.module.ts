import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { QuicklinkModule } from 'ngx-quicklink';
import { FlexLayoutModule } from '@angular/flex-layout';

import {
  BookPreviewComponent,
  BookPreviewListComponent,
  EmptyCollectionComponent,
  BookDetailsComponent
} from './components';

const SHARED_COMPONENTS = [
  BookPreviewComponent,
  BookPreviewListComponent,
  EmptyCollectionComponent,
  BookDetailsComponent
];

import { BookDetailsPageComponent, NotFoundPageComponent } from './containers';

const SHARED_CONTAINERS = [BookDetailsPageComponent, NotFoundPageComponent];

import { ElipsisPipe } from './pipes';
const SHARED_PIPES = [ElipsisPipe];
import { MaterialModule } from './material/material.module';
import { CovalentModule } from './covalent/covalent.module';

@NgModule({
  imports: [CommonModule, RouterModule, FlexLayoutModule, MaterialModule, CovalentModule],
  declarations: [SHARED_COMPONENTS, SHARED_CONTAINERS, SHARED_PIPES],
  exports: [
    CommonModule,
    FlexLayoutModule,
    QuicklinkModule,
    MaterialModule,
    CovalentModule,
    SHARED_COMPONENTS,
    SHARED_CONTAINERS
  ]
})
export class SharedModule {}
