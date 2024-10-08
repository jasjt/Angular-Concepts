// cart.reducer.ts
import { createReducer, on } from '@ngrx/store';
import * as CartActions from './cart.action';
import { CartState } from './cart.model';

export const initialState: CartState = {
  items: [],
  totalPrice: 0,
  snackbarMessage: { text: '', action: '', duration: 0 },
};

const _cartReducer = createReducer(
  initialState,
  on(CartActions.addItem, (state, { item }) => {
    const existingItemIndex = state.items.findIndex(i => i.productId === item.productId);

    if (existingItemIndex >= 0) {
      // Item already exists, update the quantity
      const updatedItems = state.items.map((cartItem, index) =>
        index === existingItemIndex
          ? { ...cartItem, quantity: cartItem.quantity + 1 }
          : cartItem
      );

      return {
        ...state,
        items: updatedItems,
        totalPrice: state.totalPrice + item.price,
        snackbarMessage: {
          text: "Quantity Updated",
          action: "Undo",
          duration: 1000
        }
      };
    }

    // New item
    return {
      ...state,
      items: [...state.items, { ...item, quantity: 1 }],
      totalPrice: state.totalPrice + item.price,
      snackbarMessage: {
        text: "Item added",
        action: "Undo",
        duration: 1000
      }
    };
  }),
  on(CartActions.removeItem, (state, { productId }) => {
    const existingItemIndex = state.items.findIndex(item => item.productId === productId);

    if (existingItemIndex >= 0) {
      // Reduce the quantity if the item exists
      const updatedItems = state.items.map((cartItem, index) =>
        index === existingItemIndex
          ? { ...cartItem, quantity: cartItem.quantity - 1 }
          : cartItem
      ).filter(item => item.quantity > 0); // Remove item if quantity is zero
      
      const updatedTotalPrice = updatedItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

      return {
        ...state,
        items: updatedItems,
        totalPrice: updatedTotalPrice,
        snackbarMessage: {
          text: "Item removed",
          action: "Undo",
          duration: 1000
        }
      };
    }

    // Return the state without changes if item not found
    return {
      ...state,
      snackbarMessage: {
        text: "Item not found",
        action: null,
        duration: 1000
      }
    };
  }),
  on(CartActions.showSnackbar, (state, { message, action }) => ({
    ...state,
    snackbarMessage: { text: message, action, duration: 5000 }
  })),
  on(CartActions.hideSnackbar, state => ({
    ...state,
    snackbarMessage: null
  })),
  on(CartActions.applyDiscount, state => ({
    ...state,
    discountApplied: true,
    totalPrice: state.totalPrice * 0.9 // 10% discount
  })),
  on(CartActions.loadCartSuccess, (state, { items }) => ({
    ...state,
    items,
    totalPrice: items.reduce((acc, item) => acc + item.price * item.quantity, 0)
  })),
  on(CartActions.loadCartFailure, (state, { error }) => ({
    ...state,
    error
  })),
);

export function cartReducer(state: CartState | undefined, action: any) {
  return _cartReducer(state, action);
}
