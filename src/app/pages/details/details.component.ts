import { Component } from '@angular/core';
import {PokemonCard} from '../../../interfaces/pokemonCard';
import {ProductService} from '../../services/product.service';
import {CartService} from '../../services/cart.service';
import {ActivatedRoute} from '@angular/router';
import {CurrencyPipe} from '@angular/common';

@Component({
  selector: 'app-details',
  imports: [
    CurrencyPipe
  ],
  templateUrl: './details.component.html',
  styleUrl: './details.component.css'
})
export class DetailsComponent {
  public product: PokemonCard | null = null;

  public constructor(
    private readonly productService: ProductService,
    private readonly cartService: CartService,
    private route: ActivatedRoute
  ) {
    this.route.params.subscribe(params => {
      this.product = this.productService.getItem(params['id']);
    })
  }

  public addToCart(): void {
    if (this.product) {
      this.cartService.addToCart(this.product);
    }
  }

  switchFavorite(): void {
    if (!this.product) return;
    this.productService.switchFavorite(this.product?.id)
  }

}
