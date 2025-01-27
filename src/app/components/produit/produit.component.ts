import {Component, inject, Input} from '@angular/core';
import {Produit} from '../../../interfaces/produit';
import {CurrencyPipe} from '@angular/common';
import {CartService} from '../../services/cart.service';
import {Router, RouterLink} from '@angular/router';

@Component({
  selector: 'app-produit',
  imports: [
    CurrencyPipe,
    RouterLink
  ],
  templateUrl: './produit.component.html',
  styleUrl: './produit.component.css'
})
export class ProduitComponent {
  @Input() produit!: Produit;
  private router = inject(Router);
  navigateToProduct(productId: number) {
    this.router.navigate([`/details/${productId}`]);
  }
}
