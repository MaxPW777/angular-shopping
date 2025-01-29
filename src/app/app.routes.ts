import { Routes } from '@angular/router';
import {HomepageComponent} from './pages/homepage/homepage.component';
import {DetailsComponent} from './pages/details/details.component';
import {CartComponent} from './pages/cart/cart.component';
import {FavoriteComponent} from './pages/favorite/favorite.component';
import {OrderComponent} from './pages/orders/orders.component';
import {ErrorComponent} from './pages/error/error.component';

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
  },
  {
    path: "favorites",
    title: "favorites",
    component: FavoriteComponent,
  },
  {
    path: "orders",
    title: "orders",
    component: OrderComponent,
  },
  {
    path:"**",
    component: ErrorComponent,
  }
];
