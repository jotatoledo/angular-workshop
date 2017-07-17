import { NgModule, isDevMode } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { environment } from 'environments/environment';
import { NotFoundPageComponent } from './shared';

const routes: Routes = [
    { path: '', loadChildren: 'app/landing/landing.module#LandingModule' },
    { path: 'books', loadChildren: 'app/books/books.module#BooksModule', pathMatch: 'prefix' },
    { path: '404', component: NotFoundPageComponent },
    { path: '**', redirectTo: '404', pathMatch: 'full' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes, {
        useHash: true,
        enableTracing: !environment.production
    })],
    exports: [RouterModule]
})
export class AppRoutingModule { }
