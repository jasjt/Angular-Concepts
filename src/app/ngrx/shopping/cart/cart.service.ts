import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { CartItem } from './cart.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cartItems: CartItem[] = [];

  addItemToCart(item: CartItem): Observable<CartItem[]> {
    const existingItemIndex = this.cartItems.findIndex(i => i.productId === item.productId);

    if (existingItemIndex >= 0) {
      // Item already exists, update quantity
      const updatedItems = this.cartItems.map((cartItem, index) =>
        index === existingItemIndex
          ? { ...cartItem, quantity: cartItem.quantity + 1 }
          : cartItem
      );
      this.cartItems = updatedItems;
    } else {
      // Add new item
      this.cartItems = [...this.cartItems, { ...item, quantity: 1 }];
    }

    return of(this.cartItems);
  }

  removeItemFromCart(productId: number): Observable<{ isRemoved: boolean, items: CartItem[] }> {
    // Find the index of the item to be removed
    const existingItemIndex = this.cartItems.findIndex(item => item.productId === productId);
    let isRemoved = false;
    if (existingItemIndex >= 0) {
      // Reduce quantity or remove item
      const updatedItems = this.cartItems.map((cartItem, index) =>
        index === existingItemIndex
          ? { ...cartItem, quantity: cartItem.quantity - 1 }
          : cartItem
      ).filter(item => item.quantity > 0); // Remove item if quantity is zero
  
      this.cartItems = updatedItems;
      isRemoved = true;
    }
  
    return of({ isRemoved, items: this.cartItems });
  }
}
