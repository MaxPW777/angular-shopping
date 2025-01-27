import { Routes } from '@angular/router';
import {HomepageComponent} from './pages/homepage/homepage.component';
import {DetailsComponent} from './pages/details/details.component';
import {CartComponent} from './pages/cart/cart.component';

export const routes: Routes = [
  {
    path: "",
    title: "home",
    component: HomepageComponent,
  },
  {
    path: "cart",
    title: "cart",
    component: CartComponent,
  },
  {
    path: "details/:id",
    title: "details",
    component: DetailsComponent,
  }
];
