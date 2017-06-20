import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import {
  MdButtonModule, MdCardModule, MdToolbarModule,
  MdTooltipModule, MdIconModule, MdListModule,
} from '@angular/material';

const MATERIAL_MODULES = [
  MdButtonModule, MdCardModule, MdToolbarModule,
  MdTooltipModule, MdIconModule, MdListModule,
];

import {
  CovalentLayoutModule, CovalentSearchModule,
} from '@covalent/core';

const COVALENT_MODULES = [
  CovalentLayoutModule, CovalentSearchModule,
];

import {
  FlexLayoutModule
} from '@angular/flex-layout';

const FLEX_LAYOUT_MODULES = [
  FlexLayoutModule,
];

import {
  BookPreviewComponent, BookPreviewListComponent,
  EmptyCollectionComponent, BookDetailsComponent
} from './components';

const SHARED_COMPONENTS = [
  BookPreviewComponent, BookPreviewListComponent,
  EmptyCollectionComponent, BookDetailsComponent
];

import {
  BookDetailsPageComponent, NotFoundPageComponent, LayoutPageComponent
} from './containers';

const SHARED_CONTAINERS = [
  BookDetailsPageComponent, NotFoundPageComponent, LayoutPageComponent
];

import { ElipsisPipe } from './pipes';
const SHARED_PIPES = [
  ElipsisPipe
];


@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    MATERIAL_MODULES,
    COVALENT_MODULES,
    FLEX_LAYOUT_MODULES,
  ],
  declarations: [
    SHARED_COMPONENTS,
    SHARED_CONTAINERS,
    SHARED_PIPES,
  ],
  exports: [
    MATERIAL_MODULES,
    COVALENT_MODULES,
    FLEX_LAYOUT_MODULES,
    SHARED_COMPONENTS,
    SHARED_CONTAINERS,
  ]
})
export class SharedModule { }
