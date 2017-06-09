import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BookDetailsPageComponent, NotFoundPageComponent } from 'app/shared';

import { BookCollectionPageComponent } from './containers';

const routes: Routes = [
  { path: '', component: BookCollectionPageComponent },
  { path: ':id', component: BookDetailsPageComponent },
  { path: '404', component: NotFoundPageComponent },
  { path: '**', redirectTo: '404', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CollectionRoutingModule { }
export const routedComponents = [
  BookCollectionPageComponent
];
