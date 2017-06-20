import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LayoutPageComponent } from 'app/shared/containers';
import { HomePageComponent } from './containers';

const routes: Routes = [
  {
    path: '',
    component: LayoutPageComponent,
    pathMatch: 'full',
    children: [
      {
        path: '',
        component: HomePageComponent,
        pathMatch: 'full'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LandingRoutingModule { }

export const routedComponents = [
  HomePageComponent
];
