import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {
  FindBookPageComponent
} from './containers';

import { BookDetailsPageComponent, NotFoundPageComponent } from 'app/shared';

const routes: Routes = [
  {
    path: '',
    component: FindBookPageComponent
  },
  {
    path: ':id',
    component: BookDetailsPageComponent
  },
  {
    path: '404',
    component: NotFoundPageComponent
  },
  {
    path: '**',
    redirectTo: '404',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StoreRoutingModule { }
export const routedComponents = [
  FindBookPageComponent
];
