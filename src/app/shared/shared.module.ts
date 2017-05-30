import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  MdButtonModule, MdCardModule, MdToolbarModule,
  MdTooltipModule, MdIconModule, MdListModule,
} from '@angular/material';
import {
  CovalentLayoutModule, CovalentSearchModule,
} from '@covalent/core';
import {
  FlexLayoutModule
} from '@angular/flex-layout';

const FLEX_LAYOUT_MODULES = [
  FlexLayoutModule,
];

const COVALENT_MODULES = [
  CovalentLayoutModule, CovalentSearchModule,
];

const MATERIAL_MODULES = [
  MdButtonModule, MdCardModule, MdToolbarModule,
  MdTooltipModule, MdIconModule, MdListModule,
];

@NgModule({
  imports: [
    CommonModule,
    MATERIAL_MODULES,
    COVALENT_MODULES,
    FLEX_LAYOUT_MODULES,
  ],
  declarations: [],
  exports: [
    MATERIAL_MODULES,
    COVALENT_MODULES,
    FLEX_LAYOUT_MODULES,
  ]
})
export class SharedModule { }
