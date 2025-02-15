import { Pipe, PipeTransform } from '@angular/core';
import {PokemonCard} from '../../interfaces/pokemonCard';

@Pipe({
  name: 'search',
  standalone: true,
})
export class SearchPipe implements PipeTransform {
  transform(pokemons: PokemonCard[], searchTerm: string): PokemonCard[] {
    if (!pokemons || !searchTerm) {
      return pokemons;
    }
    const lowerSearch = searchTerm.toLowerCase();
    return pokemons.filter(p =>
      p.nom.toLowerCase().includes(lowerSearch)
    );
  }
}
