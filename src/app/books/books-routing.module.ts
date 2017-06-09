import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {
  LayoutPageComponent
} from './containers';

const routes: Routes = [
  {
    path: '', component: LayoutPageComponent,
    children: [
      { path: '', redirectTo: 'collection', pathMatch: 'full' },
      { path: 'store', loadChildren: './store/store.module#StoreModule' },
      { path: 'collection', loadChildren: './collection/collection.module#CollectionModule' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BooksRoutingModule { }

export const routedComponents = [
  LayoutPageComponent
];
