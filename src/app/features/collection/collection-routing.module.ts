import { NgModule, Type } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BookGuard } from '@ws/core';
import { BookDetailsPageComponent, NotFoundPageComponent } from '@ws/shared';
import { BookCollectionPageComponent } from './containers/book-collection-page/book-collection-page.component';

const routes: Routes = [
  { path: '', component: BookCollectionPageComponent },
  {
    path: ':id',
    component: BookDetailsPageComponent,
    canActivate: [BookGuard]
  },
  { path: '404', component: NotFoundPageComponent },
  { path: '**', redirectTo: '404', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CollectionRoutingModule {}
export const routedComponents: Type<any>[] = [BookCollectionPageComponent];
