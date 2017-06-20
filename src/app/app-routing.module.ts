import { NgModule, isDevMode } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NotFoundPageComponent, LayoutPageComponent } from './shared';

const routes: Routes = [
    { path: '', loadChildren: 'app/landing/landing.module#LandingModule', pathMatch: 'full' },
    { path: 'books', loadChildren: 'app/books/books.module#BooksModule' },
    { path: '404', component: LayoutPageComponent, children: [{ path: '', component: NotFoundPageComponent }] },
    { path: '**', redirectTo: '404', pathMatch: 'full' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes, {
        useHash: true,
        enableTracing: true
    })],
    exports: [RouterModule]
})
export class AppRoutingModule { }
