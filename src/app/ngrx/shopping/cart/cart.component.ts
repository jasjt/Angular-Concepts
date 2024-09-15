import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { removeItem } from './cart.action';
import { selectCartItems, selectTotalPrice } from './cart.selector';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AppState } from '../../../store/reducer';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule, MatCardModule],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {
  cartItems$: Observable<any[]>;
  totalPrice$: Observable<number>;

  constructor(private store: Store<AppState>, private snackBar: MatSnackBar) {
    this.cartItems$ = this.store.select(selectCartItems);
    this.totalPrice$ = this.store.select(selectTotalPrice);
  }
  ngOnInit() {
    this.store.pipe(
      select(state => state.cart.snackbarMessage) // Assuming you have a snackbarMessage in your state
    ).subscribe(message => {
      if (message) {
        this.snackBar.open(message.text, message.action, { duration: message.duration });
      }
    });
  }

  removeFromCart(productId: number) {
    this.store.dispatch(removeItem({ productId }));
  }
}
