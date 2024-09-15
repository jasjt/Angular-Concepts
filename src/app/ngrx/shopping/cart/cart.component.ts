import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { removeItem } from './cart.action';
import { selectCartItems, selectTotalPrice } from './cart.selector';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { AppState } from '../../../store/reducer';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatSnackBarModule],
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cartItems$: Observable<any[]>;
  totalPrice$: Observable<number>;

  constructor(private store: Store<AppState>, private snackBar: MatSnackBar) {
    this.cartItems$ = this.store.select(selectCartItems);
    this.totalPrice$ = this.store.select(selectTotalPrice);
  }

  ngOnInit() {
    this.store.pipe(
      select(state => state.cart.snackbarMessage) // Select snackbarMessage from the state
    ).subscribe(message => {
      console.log('Snackbar message:', message); // Log the message for debugging
      if (message?.text) { // Only show snackbar if there's a message
        this.snackBar.open(message.text, message.action, { duration: message.duration });
      }
    });
  }

  removeFromCart(productId: number) {
    this.store.dispatch(removeItem({ productId }));
  }
}
