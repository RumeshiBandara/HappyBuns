import { Routes } from '@angular/router';
import { BurgersComponent } from './pages/burgers/burgers.component';
import { SidesComponent } from './pages/sides/sides.component';
import { DrinksComponent } from './pages/drinks/drinks.component';
import { DessertsComponent } from './pages/desserts/desserts.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo: '/burgers', pathMatch: 'full'
    },
    {
        path: 'burgers',
        component: BurgersComponent
    },
    {
        path: 'sides',
        component: SidesComponent
    },
    {
        path: 'drinks',
        component: DrinksComponent
    },
    {
        path: 'desserts',
        component: DessertsComponent
    },
];
