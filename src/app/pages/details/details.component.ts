import { Component, OnInit } from '@angular/core';
import { PokemonCard } from '../../../interfaces/pokemonCard';
import { ProductService } from '../../services/product.service';
import { CartService } from '../../services/cart.service';
import { ActivatedRoute } from '@angular/router';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-details',
  imports: [
    CurrencyPipe
  ],
  templateUrl: './details.component.html',
  styleUrl: './details.component.css'
})
export class DetailsComponent implements OnInit {
  public product: PokemonCard | null = null;

  constructor(
    private readonly productService: ProductService,
    private readonly cartService: CartService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const pokemonId = params['id'];

      // Fetch data from cache
      this.productService.getData().subscribe((data: PokemonCard[]) => {
        this.product = data.find(p => p.id === pokemonId) || null;
      });
    });
  }

  public addToCart(): void {
    if (this.product) {
      this.cartService.addToCart(this.product);
    }
  }

  public switchFavorite(): void {
    if (!this.product) return;
    this.productService.switchFavorite(this.product.id);
  }

  public goToEvolution(): void {
    if (this.product) {
      const evolution = this.productService.getEvolution(this.product?.nomEvolution);
      if (evolution) {
        window.location.href = evolution;
      }
    }
  }
}
