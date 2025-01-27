import { Injectable } from '@angular/core';
import {Produit} from '../../interfaces/produit';
import {produits} from '../../data/produits';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private data: Produit[] = produits

  public getData = (): Produit[] => this.data;

  public getItem = (id: number): Produit | null => this.data.find((item: Produit) => item.id === id) || null;
}
