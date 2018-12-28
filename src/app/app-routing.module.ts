import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { QuicklinkStrategy } from 'ngx-quicklink';

import { HomePageComponent } from '@ws/core';
import { NotFoundPageComponent } from '@ws/shared';
import { environment } from '@environment';

const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'store', loadChildren: './features/store/store.module#StoreModule' },
  { path: 'collection', loadChildren: './features/collection/collection.module#CollectionModule' },
  { path: '404', component: NotFoundPageComponent },
  { path: '**', redirectTo: '404', pathMatch: 'full' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      useHash: true,
      preloadingStrategy: QuicklinkStrategy,
      paramsInheritanceStrategy: 'always',
      enableTracing: !environment.production
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
