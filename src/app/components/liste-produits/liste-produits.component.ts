import {Component, Input} from '@angular/core';
import {PokemonCard} from '../../../interfaces/pokemonCard';
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
  @Input() public produits: PokemonCard[] = [];

}
