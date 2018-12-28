import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { QuicklinkStrategy } from 'ngx-quicklink';

import { HomePageComponent } from '@ws/core';
import { NotFoundPageComponent } from '@ws/shared';

const routes: Routes = [
  { path: '', component: HomePageComponent },
  {
    path: 'books',
    loadChildren: 'app/books/books.module#BooksModule'
  },
  { path: '404', component: NotFoundPageComponent },
  { path: '**', redirectTo: '404', pathMatch: 'full' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      useHash: true,
      preloadingStrategy: QuicklinkStrategy,
      paramsInheritanceStrategy: 'always'
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
