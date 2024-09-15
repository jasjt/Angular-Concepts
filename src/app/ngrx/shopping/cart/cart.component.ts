import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from '../../../store/reducer';
import { removeItem } from './cart.action';
import { selectCartItems, selectTotalPrice } from './cart.selector';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule, MatCardModule],
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  cartItems$: Observable<any[]>;
  totalPrice$: Observable<number>;
  show: boolean = true;

  constructor(private store: Store<AppState>) {
    this.cartItems$ = this.store.select(selectCartItems);
    this.cartItems$.subscribe((item) => {
      this.show = item.length ? true : false;
    });
    this.totalPrice$ = this.store.select(selectTotalPrice);
  }

  removeFromCart(productId: number) {
    this.store.dispatch(removeItem({ productId }));
  }
}
