import { NgModule, Type } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NotFoundPageComponent, BookDetailsPageComponent } from '@ws/shared';
import { BookGuard } from '@ws/core';
import { FindBookPageComponent } from './containers/find-book-page/find-book-page.component';

const routes: Routes = [
  { path: '', component: FindBookPageComponent },
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
export class StoreRoutingModule {}
export const routedComponents: Type<any>[] = [FindBookPageComponent];
