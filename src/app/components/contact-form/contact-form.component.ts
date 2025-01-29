import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CartService } from '../../services/cart.service';
import { OrderService } from '../../services/order.service'; // Import OrderService
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact-form',
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './contact-form.component.html',
  standalone: true,
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent {
  public formGroup: FormGroup;

  constructor(
    private cartService: CartService,
    private orderService: OrderService,
    private router: Router
  ) {
    this.formGroup = new FormGroup({
      name: new FormControl(''),
      address: new FormControl(''),
    });
  }

  public onSubmit(): void {
    const order = {
      ...this.formGroup.value,
      products: this.cartService.getCart(),
      total: this.cartService.getTotal(),
      date: new Date().toISOString()
    };

    this.orderService.saveOrder(order);
    this.cartService.clearCart();

    this.router.navigate(['/orders']);
  }
}
