// cart.pipe.ts
import { Pipe, PipeTransform } from '@angular/core';
import { PokemonCard } from '../interfaces/pokemonCard';

@Pipe({
  standalone: true,
  name: 'cart'
})
export class CartPipe implements PipeTransform {
  transform(products: PokemonCard[]): { produit: PokemonCard; count: number }[] {
    // Create a dictionary to map product IDs to their aggregated data
    const productCounts: { [key: string]: { produit: PokemonCard; count: number } } = {};

    // Count occurrences of each product
    for (const item of products) {
      const productId = item.id;
      if (!productCounts[productId]) {
        productCounts[productId] = {
          produit: item,  // store the entire product here
          count: 1
        };
      } else {
        productCounts[productId].count++;
      }
    }

    // Convert the dictionary to an array and return it
    return Object.values(productCounts);
  }
}
