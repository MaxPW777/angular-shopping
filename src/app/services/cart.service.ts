import { Injectable } from '@angular/core';
import { Produit } from '../../interfaces/produit';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cart: Produit[] = [];
  public cartChanged = new Subject<void>();

  public addToCart(produit: Produit): void {
    produit.inCart = true; // Mark as in cart
    this.cart.push(produit);
    this.cartChanged.next();
  }

  public getCart(): Produit[] {
    return this.cart;
  }

  public removeOneFromCart(produit: Produit): void {
    const index = this.cart.findIndex(p => p.id === produit.id); // Find product index by `id`
    if (index !== -1) {
      this.cart.splice(index, 1); // Remove one instance
      if (!this.cart.some(p => p.id === produit.id)) {
        produit.inCart = false; // If no more instances, mark as not in cart
      }
      this.cartChanged.next();
    }
  }

  public clearCart(): void {
    this.cart.forEach(p => (p.inCart = false)); // Mark all as not in cart
    this.cart = [];
    this.cartChanged.next();
  }
}
