import {Injectable} from '@angular/core';
import {Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  private ordersKey = 'orders';
  public ordersChanged = new Subject<void>();

  constructor() {}

  public saveOrder(order: any): void {
    const orders = this.getOrders();
    orders.push(order);
    localStorage.setItem(this.ordersKey, JSON.stringify(orders));
    console.log('Order saved:', order); // Debugging
    this.ordersChanged.next();
  }

  public getOrders(): any[] {
    return JSON.parse(localStorage.getItem(this.ordersKey) || '[]');
  }
}
