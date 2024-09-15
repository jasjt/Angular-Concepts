// app/store/reducers.ts
import { ActionReducerMap } from '@ngrx/store';
import { cartReducer } from '../ngrx/shopping/cart/cart.reducer';
import { CartState } from '../ngrx/shopping/cart/cart.model';

export interface AppState {
  cart: CartState;
}

export const reducers: ActionReducerMap<AppState> = {
  cart: cartReducer
};
