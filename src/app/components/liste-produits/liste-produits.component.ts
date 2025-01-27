import { Component } from '@angular/core';
import {ProductService} from '../../services/product.service';
import {Produit} from '../../../interfaces/produit';
import {ProduitComponent} from '../produit/produit.component';

@Component({
  selector: 'app-liste-produits',
  imports: [
    ProduitComponent
  ],
  templateUrl: './liste-produits.component.html',
  styleUrl: './liste-produits.component.css'
})
export class ListeProduitsComponent {
  public produits: Produit[] = [];

  public constructor(private readonly productService: ProductService) {
    this.produits = this.productService.getData();
  }

}
