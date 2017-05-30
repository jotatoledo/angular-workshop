import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {
    LayoutPageComponent, MainPageComponent, FindBookPageComponent,
    NotFoundPageComponent,
} from './containers';

const routes: Routes = [
    {
        path: '',
        component: MainPageComponent,
        children: [
            {
                path: '',
                component: LayoutPageComponent,
                children: [
                    {
                        path: 'find',
                        component: FindBookPageComponent
                    },
                    {
                        path: '',
                        redirectTo: 'find',
                        pathMatch: 'full'
                    },
                    {
                        path: '404',
                        component: NotFoundPageComponent
                    },
                    {
                        path: '**',
                        redirectTo: '404',
                        pathMatch: 'full'
                    }
                ]
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes, {
        useHash: true
    })],
    exports: [RouterModule]
})
export class AppRoutingModule { }

export const routedComponents = [
    LayoutPageComponent, MainPageComponent, FindBookPageComponent,
    NotFoundPageComponent,
];
