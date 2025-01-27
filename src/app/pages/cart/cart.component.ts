import { Component, OnInit } from '@angular/core';
import { CartService } from '../../services/cart.service';
import {Produit} from '../../../interfaces/produit';
import {ProduitComponent} from '../../components/produit/produit.component';
import {CartPipe} from '../../cart.pipe';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  imports: [
    ProduitComponent,
    CartPipe
  ],
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  produits: Produit[] = [];

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.updateCart();
    this.cartService.cartChanged.subscribe(() => {
      this.updateCart();
    });
  }

  updateCart(): void {
    this.produits = this.cartService.getCart();
  }

  removeOne(produit: Produit): void {
    this.cartService.removeOneFromCart(produit);
  }

  trackById(index: number, item: { produit: Produit }): number {
    return item.produit.id; // Use the unique identifier `id`
  }
}
