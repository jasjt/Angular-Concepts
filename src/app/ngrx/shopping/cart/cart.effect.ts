// cart.effects.ts
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import * as CartActions from './cart.action';
import { CartService } from './cart.service';

@Injectable()
export class CartEffects {
  constructor(
    private actions$: Actions,
    private cartService: CartService,
    private snackBar: MatSnackBar
  ) {}

  addItemToCart$ = createEffect(() =>
    this.actions$.pipe(
      ofType(CartActions.addItem),
      switchMap((action) =>
        this.cartService.addItemToCart(action.item).pipe(
          map((updatedItems) => {
            this.snackBar.open('Item added to cart', 'Undo', { duration: 1000 });
            return CartActions.loadCartSuccess({ items: updatedItems });
          }),
          catchError((error) => {
            this.snackBar.open('Failed to add item to cart', 'Retry', { duration: 1000 });
            return of(CartActions.loadCartFailure({ error }));
          })
        )
      )
    )
  );

  removeItemFromCart$ = createEffect(() =>
    this.actions$.pipe(
      ofType(CartActions.removeItem),
      switchMap((action) =>
        this.cartService.removeItemFromCart(action.productId).pipe(
          map((result) => {
            if (result.isRemoved) {
              this.snackBar.open('Item removed from cart', 'Undo', { duration: 1000 });
            }
            return CartActions.loadCartSuccess({ items: result.items });
          }),
          catchError((error) => {
            this.snackBar.open('Failed to remove item to cart', 'Retry', { duration: 1000 });
            return of(CartActions.loadCartFailure({ error }));
          })
        )
      )
    )
  );
}
