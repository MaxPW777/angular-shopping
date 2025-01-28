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
      this.favoriteChanged.next();

    }
  }

  public getFavorite = (): Produit[] =>
    this.data.filter((item: Produit) => item.isFavorite);

}


