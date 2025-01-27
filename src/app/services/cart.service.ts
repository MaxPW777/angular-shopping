import {Injectable} from '@angular/core';
import {Produit} from '../../interfaces/produit';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cart: any[] = [];

  public addToCart(produit: Produit): void {
    this.cart.push(produit);
  }

  public getCart(): any[] {
    return this.cart;
  }

  public clearCart(): void {
    this.cart = [];
  }
}
