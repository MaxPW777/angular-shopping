import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {map, Observable, Subject} from 'rxjs';
import {PokemonGetDto} from '../../interfaces/pokemon-get.dto';
import {PokemonCard} from '../../interfaces/pokemonCard';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private apiUrl = 'https://api.pokemontcg.io/v2/cards?q=nationalPokedexNumbers:[1 TO 151]&orderBy=nationalPokedexNumbers&pageSize=151';
  private data: PokemonCard[] = [];
  public favoriteChanged = new Subject<void>();

  constructor(private http: HttpClient) {
    this.fetchData();
  }

  private fetchData(): void {
    this.http.get<{ data: any[] }>(this.apiUrl).subscribe(response => {
      this.data = this.mapData(response.data);
    });
  }

  public mapData(data: PokemonGetDto[]): PokemonCard[] {
    return data.map(item => ({
      id: item.id,
      nom: item.name,
      numero: item.number,
      image: item.images.small,
      hp: item.hp,
      attaque: item.attacks.map(attack => ({ name: attack.name, damage: attack.damage })),
      type: item.types,
      rareté: item.rarity,
      prixMoyen: item.tcgplayer?.prices.normal?.high || 0,
      isFavorite: false,
      inCart: false
    }));
  }

  public getData(): Observable<PokemonCard[]> {
    return this.http.get<{ data: PokemonGetDto[] }>(this.apiUrl).pipe(
      map(response => this.mapData(response.data))
    );
  }

  public getItem(id: string): PokemonCard | null {
    return this.data.find((item: PokemonCard) => item.id === id) || null;
  }

  public switchFavorite(id: string): void {
    const item = this.data.find((item: PokemonCard) => item.id === id);
    if (item) {
      item.isFavorite = !item.isFavorite;
      const favorites = JSON.parse(localStorage.getItem("favoris") || "[]");
      if (item.isFavorite) {
        favorites.push(item);
      } else {
        const index = favorites.findIndex((fav: PokemonCard) => fav.id === id);
        if (index > -1) favorites.splice(index, 1);
      }
      localStorage.setItem("favoris", JSON.stringify(favorites));
      this.favoriteChanged.next();
    }
  }

  public getFavorite(): PokemonCard[] {
    const storedFavorites: PokemonCard[] = JSON.parse(localStorage.getItem("favoris") || "[]");
    return this.data
      .map(item => {
        item.isFavorite = storedFavorites.some(fav => fav.id === item.id);
        return item;
      })
      .filter(item => item.isFavorite);
  }
}
