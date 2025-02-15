import { Component, OnInit } from '@angular/core';
import {PokemonCard} from '../../../interfaces/pokemonCard';
import {ProductService} from '../../services/product.service';
import {ProduitComponent} from '../../components/produit/produit.component';


@Component({
  selector: 'app-favorite',
  imports: [ProduitComponent],
  templateUrl: './favorite.component.html',
  styleUrl: './favorite.component.css'
})
export class FavoriteComponent implements OnInit {

  produits: PokemonCard[] = [];

  constructor(private productService: ProductService) {}
  ngOnInit() {
      this.upDateFavorite();
      this.productService.favoriteChanged.subscribe(() => {
        this.upDateFavorite();
      })
  }

  upDateFavorite() {
    this.produits = this.productService.getFavorite()
  }


  }
