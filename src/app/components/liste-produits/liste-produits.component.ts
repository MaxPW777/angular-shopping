import {Component, Input} from '@angular/core';
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
  @Input() public produits: Produit[] = [];

}
