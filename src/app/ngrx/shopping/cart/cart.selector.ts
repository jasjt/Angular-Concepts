// cart.selectors.ts
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { CartState } from './cart.model';

export const selectCart = (state: any) => state.cart;

export const selectCartState = createFeatureSelector<CartState>('cart');

export const selectCartItems = createSelector(
  selectCartState,
  (state: CartState) => state.items
);

export const selectTotalPrice = createSelector(
  selectCartState,
  (state: CartState) =>
    state.items.reduce((total, item) => total + item.price * item.quantity, 0)
);

export const selectCartItemCount = createSelector(
  selectCart,
  (cart: CartState) => cart.items.reduce((total, item) => total + item.quantity, 0)
);