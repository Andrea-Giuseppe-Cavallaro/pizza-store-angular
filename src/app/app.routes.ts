import { Routes } from '@angular/router';
import { Home } from './features/home/home';
import { Menu } from './features/menu/menu';
import { Cart } from './features/cart/cart';
import { PageNotFound } from './features/page-not-found/page-not-found';
import { Pizza } from './features/pizza/pizza';

export const routes: Routes = [
    { path: "", component: Home },
    { path: "menu", component: Menu },
    { path: "menu/:id", component: Pizza },
    { path: 'cart', component: Cart },
    { path: "404", component: PageNotFound },
    { path: "**", redirectTo: "404", pathMatch: 'full' }
];
