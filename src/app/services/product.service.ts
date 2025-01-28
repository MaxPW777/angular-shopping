import { Injectable } from '@angular/core';
import {Produit} from '../../interfaces/produit';
import {produits} from '../../data/produits';
import {Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private data: Produit[] = produits
  public favoriteChanged = new Subject<void>();

  public getData = (): Produit[] => this.data;

  public getItem = (id: number): Produit | null => this.data.find((item: Produit) => item.id === id) || null;

  public switchFavorite = (id: number | undefined): void => {
    const item = this.data.find((item: Produit) => item.id === id);
    if (item) {
      item.isFavorite = !item.isFavorite;
      const favorites = JSON.parse(localStorage.getItem("favoris") || "[]");
      if (item.isFavorite) {
        favorites.push(item);
      } else {
        const index = favorites.findIndex((fav: Produit) => fav.id === id);
        if (index > -1) favorites.splice(index, 1);
      }

      localStorage.setItem("favoris", JSON.stringify(favorites));
      this.favoriteChanged.next();

    }
  }

  public getFavorite = (): Produit[] => {
    const storedFavorites: Produit[] = JSON.parse(localStorage.getItem("favoris") || "[]");
    return this.data
      .map(item => {
        item.isFavorite = storedFavorites.some(fav => fav.id === item.id);
        return item;
      })
      .filter(item => item.isFavorite);
  };
}


