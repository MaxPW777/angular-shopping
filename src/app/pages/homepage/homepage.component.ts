import { Component, OnInit } from '@angular/core';
import { ListeProduitsComponent } from '../../components/liste-produits/liste-produits.component';
import { ProductService } from '../../services/product.service';
import { PokemonCard } from '../../../interfaces/pokemonCard';

@Component({
  selector: 'app-homepage',
  imports: [ListeProduitsComponent],
  standalone: true,
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  public produits: PokemonCard[] = [];

  constructor(private readonly productService: ProductService) {}

  ngOnInit(): void {
    this.productService.getData().subscribe((data: PokemonCard[]) => {
      this.produits = data;
    });
  }
}
