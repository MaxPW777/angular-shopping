import { Component } from '@angular/core';
import {
  ListeProduitsComponent
} from '../../components/liste-produits/liste-produits.component';
import {ProductService} from '../../services/product.service';
import {Produit} from '../../../interfaces/produit';

@Component({
  selector: 'app-homepage',
  imports: [
    ListeProduitsComponent
  ],
  standalone: true,
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent {
  public produits: Produit[] = [];

  constructor(private readonly productService: ProductService) {
    this.produits = this.productService.getData();
  }
}
