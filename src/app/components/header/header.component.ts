import {Component, OnInit} from '@angular/core';
import {RouterLink} from '@angular/router';
import {CartService} from '../../services/cart.service';

@Component({
  selector: 'app-header',
  imports: [
    RouterLink
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit {
  cartCount: number = 0;

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.cartService.cartChanged.subscribe(() => {
      this.cartCount = this.cartService.getCart().length;
    });

    // Initialize the cart count
    this.cartCount = this.cartService.getCart().length;
  }
}
