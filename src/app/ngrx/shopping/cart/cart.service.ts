import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { CartItem } from './cart.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cartItems: CartItem[] = [];

  // Simulate adding item to cart
  addItemToCart(item: CartItem): Observable<CartItem[]> {
    const existingItemIndex = this.cartItems.findIndex(i => i.productId === item.productId);

    if (existingItemIndex >= 0) {
      // Update quantity
      this.cartItems[existingItemIndex].quantity += 1;
    } else {
      // Add new item
      this.cartItems.push({ ...item, quantity: 1 });
    }

    return of(this.cartItems);
  }
  // Simulating an API call to get a discount coupon
  getDiscount(): Observable<number> {
    // Simulating a delay (e.g., fetching from server)
    return of(10); // Assume it returns a 10% discount
  }
}
