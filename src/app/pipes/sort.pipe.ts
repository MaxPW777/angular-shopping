import { Pipe, PipeTransform } from '@angular/core';
import {PokemonCard} from '../../interfaces/pokemonCard';

@Pipe({
  name: 'sort',
  standalone: true,
})
export class SortPipe implements PipeTransform {
  transform(pokemons: PokemonCard[], sortBy: string): PokemonCard[] {
    if (!pokemons || !sortBy) {
      return pokemons;
    }

    return pokemons.slice().sort((a, b) => {
      if (sortBy === 'name') {
        return a.nom.localeCompare(b.nom);
      } else if (sortBy === 'hp') {
        return parseInt(a.hp || '0', 10) - parseInt(b.hp || '0', 10);
      }
      return 0;
    });
  }
}
