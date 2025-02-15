import {Component, inject, Input} from '@angular/core';
import {PokemonCard} from '../../../interfaces/pokemonCard';
import {CurrencyPipe} from '@angular/common';
import {Router, RouterLink} from '@angular/router';
import {ProductService} from '../../services/product.service';

@Component({
  selector: 'app-produit',
  imports: [
    CurrencyPipe,
    RouterLink
  ],
  templateUrl: './produit.component.html',
  standalone: true,
  styleUrl: './produit.component.css'
})
export class ProduitComponent {
  @Input() produit!: PokemonCard;
  private router = inject(Router);
  produitService = inject(ProductService);
  navigateToProduct(productId: number) {
    this.router.navigate([`/details/${productId}`]);
  }
  switchFavorite(): void {
  this.produitService.switchFavorite(this.produit.id)
  }
}
