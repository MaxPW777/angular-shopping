import { Component } from '@angular/core';
import {CartService} from '../../services/cart.service';
import {Produit} from '../../../interfaces/produit';
import {
  ListeProduitsComponent
} from '../../components/liste-produits/liste-produits.component';

@Component({
  selector: 'app-cart',
  imports: [
    ListeProduitsComponent
  ],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {
  public produits: Produit[] = [];
  constructor(private readonly cartService: CartService) {
    this.produits = this.cartService.getCart();
  }
}
