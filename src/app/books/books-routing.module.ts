import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NotFoundPageComponent } from 'app/shared/containers';

const routes: Routes = [
  { path: '', redirectTo: 'collection', pathMatch: 'full' },
  { path: 'store', loadChildren: './store/store.module#StoreModule' },
  { path: 'collection', loadChildren: './collection/collection.module#CollectionModule' },
  { path: '404', component: NotFoundPageComponent },
  { path: '**', redirectTo: '404', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BooksRoutingModule { }

export const routedComponents = [
];
