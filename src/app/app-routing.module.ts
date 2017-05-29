import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {
    LayoutPageComponent, MainPageComponent,
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
    LayoutPageComponent, MainPageComponent,
];
