import { Injectable } from '@angular/core';
import { PokemonCard } from '../../interfaces/pokemonCard';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cart: PokemonCard[] = [];
  public cartChanged = new Subject<void>();

  public addToCart(produit: PokemonCard): void {
    produit.inCart = true; // Mark as in cart
    this.cart.push(produit);
    localStorage.setItem("cart", JSON.stringify(this.cart));
    this.cartChanged.next();
  }

  public getCart(): PokemonCard[] {
    if (localStorage.getItem("cart")) {
      this.cart = JSON.parse(localStorage.getItem("cart") || '[]');
    }
    return this.cart;
  }

  public removeOneFromCart(produit: PokemonCard): void {
    const index = this.cart.findIndex(p => p.id === produit.id);
    if (index !== -1) {
      this.cart.splice(index, 1);
      if (!this.cart.some(p => p.id === produit.id)) {
        produit.inCart = false;
      }
      localStorage.setItem("cart", JSON.stringify(this.cart));
      this.cartChanged.next();
    }

  }

  public clearCart(): void {
    this.cart.forEach(p => (p.inCart = false)); // Mark all as not in cart
    this.cart = [];
    localStorage.setItem("cart", JSON.stringify([]));
    this.cartChanged.next();
  }

  public getTotal(): number {
    return this.cart.reduce((acc, p) => acc + p.prixMoyen, 0);
  }

}

