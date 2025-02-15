import { Pipe, PipeTransform } from '@angular/core';
import {PokemonCard} from '../../interfaces/pokemonCard';

@Pipe({
  name: 'typeFilter',
  standalone: true,
})
export class TypeFilterPipe implements PipeTransform {
  transform(pokemons: PokemonCard[], selectedType: string): PokemonCard[] {
    if (!pokemons || !selectedType) {
      return pokemons;
    }
    return pokemons.filter(p => p.type?.includes(selectedType));
  }
}
