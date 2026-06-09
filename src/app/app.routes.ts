import { Routes } from '@angular/router';

import { Home } from './home/home';
import { KantoRegion } from './kanto-region/kanto-region';
import { johtoRegion } from './johto-region/johto-region';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
        path: 'home',
        component: Home
    },
    {
        path: 'kanto',
        component: KantoRegion
    },
    {
        path: 'johto',
        component: johtoRegion
    }
];
