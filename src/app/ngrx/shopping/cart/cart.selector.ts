// cart.selectors.ts
import { createSelector } from '@ngrx/store';
import { CartState } from './cart.model';

export const selectCart = (state: any) => state.cart;

export const selectCartItems = createSelector(
  selectCart,
  (state: CartState) => state.items
);

export const selectTotalPrice = createSelector(
  selectCart,
  (state: CartState) => state.items.reduce((total, item) => total + item.price * item.quantity, 0)
);

export const selectCartItemCount = createSelector(
  selectCart,
  (cart: CartState) => cart.items.reduce((total, item) => total + item.quantity, 0)
);