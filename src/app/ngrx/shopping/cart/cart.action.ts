// cart.actions.ts
import { createAction, props } from '@ngrx/store';
import { CartItem } from './cart.model';

export const addItem = createAction(
  '[Cart] Add Item',
  props<{ item: CartItem }>()
);

export const removeItem = createAction(
  '[Cart] Remove Item',
  props<{ productId: number }>()
);

// Action dispatched when the cart is loaded successfully
export const loadCartSuccess = createAction(
  '[Cart] Load Cart Success',
  props<{ items: CartItem[] }>()
);

// Action dispatched when loading the cart fails
export const loadCartFailure = createAction(
  '[Cart] Load Cart Failure',
  props<{ error: any }>()
);

export const showSnackbar = createAction(
  '[Cart] Show Snackbar',
  props<{ message: string; action: string }>()
);

export const hideSnackbar = createAction('[Cart] Hide Snackbar');

export const applyDiscount = createAction('[Cart] Apply Discount');
