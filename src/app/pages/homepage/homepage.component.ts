import { Component, OnInit } from '@angular/core';
import { ListeProduitsComponent } from '../../components/liste-produits/liste-produits.component';
import { ProductService } from '../../services/product.service';
import { PokemonCard } from '../../../interfaces/pokemonCard';
import {SearchPipe} from '../../pipes/search.pipe';
import {TypeFilterPipe} from '../../pipes/type-filter.pipe';
import {SortPipe} from '../../pipes/sort.pipe';
import {
  FilterBarComponent
} from '../../components/filter-bar/app-filter-bar.component';

@Component({
  selector: 'app-homepage',
  imports: [ListeProduitsComponent, SearchPipe, TypeFilterPipe, SortPipe, FilterBarComponent],
  standalone: true,
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  public produits: PokemonCard[] = [];
  public currentFilter = {
    selectedType: '',
    searchTerm: '',
    sortBy: ''
  };

  constructor(private readonly productService: ProductService) {}

  ngOnInit(): void {
    this.productService.getData().subscribe((data: PokemonCard[]) => {
      this.produits = data;
    });
  }

  onFilterChange(filters: { selectedType: string; searchTerm: string; sortBy: string }): void {
    this.currentFilter = filters;
  }
}
