import { Component } from '@angular/core';
import {
  ListeProduitsComponent
} from '../../components/liste-produits/liste-produits.component';

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

}
