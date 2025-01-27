import {Component, Input} from '@angular/core';
import {Produit} from '../../../interfaces/produit';
import {CurrencyPipe} from '@angular/common';
import {CartService} from '../../services/cart.service';

@Component({
  selector: 'app-produit',
  imports: [
    CurrencyPipe
  ],
  templateUrl: './produit.component.html',
  styleUrl: './produit.component.css'
})
export class ProduitComponent {
  @Input() produit!: Produit;

  public constructor(private readonly cartService: CartService) {}

  public addToCart(produit: Produit): void {
    this.cartService.addToCart(produit);
  }
}
