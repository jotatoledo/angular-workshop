import { NgModule, isDevMode } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NotFoundPageComponent } from './shared';

const routes: Routes = [
    { path: '', redirectTo: 'books', pathMatch: 'full' },
    { path: 'books', loadChildren: './books/books.module#BooksModule' },
    { path: '404', component: NotFoundPageComponent },
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
