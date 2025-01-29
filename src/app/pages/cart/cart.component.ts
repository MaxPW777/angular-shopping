import { Component, OnInit } from '@angular/core';
import { CommonModule} from '@angular/common';
import { CartService } from '../../services/cart.service';
import {Produit} from '../../../interfaces/produit';
import {ProduitComponent} from '../../components/produit/produit.component';
import {CartPipe} from '../../cart.pipe';
import {
  ContactFormComponent
} from '../../components/contact-form/contact-form.component';
import {RouterModule} from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  imports: [
    ProduitComponent,
    CartPipe,
    CommonModule,
    ContactFormComponent,
    RouterModule
  ],
  standalone: true,
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

  addOne(produit: Produit): void {
    this.cartService.addToCart(produit);
  }

  clearCart(): void {
    this.cartService.clearCart();
  }

  getTotal(): number {
    return this.cartService.getTotal();
  }
}
