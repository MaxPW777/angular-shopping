import { Component, OnInit } from '@angular/core';
import { OrderService } from '../../services/order.service';
import { CommonModule } from '@angular/common'; // Add this

@Component({
  selector: 'app-order',
  standalone: true, // Required for standalone components
  imports: [CommonModule], // Add CommonModule here
  templateUrl: './orders.component.html',
  styleUrl: './orders.component.css'
})
export class OrderComponent implements OnInit {
  public orders: any[] = [];
  public expandedOrder: string | null = null;

  constructor(private orderService: OrderService) {}

  ngOnInit(): void {
    this.orders = this.orderService.getOrders();
    this.orderService.ordersChanged.subscribe(() => { // Subscribe to changes
      this.orders = this.orderService.getOrders();
    });
    console.log('Orders:', this.orders); // Verify data in the console
  }

  toggleOrder(orderDate: string): void {
    this.expandedOrder = this.expandedOrder === orderDate ? null : orderDate;
  }
}
