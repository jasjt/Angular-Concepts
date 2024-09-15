import { ActionReducer } from '@ngrx/store';
import { localStorageSync } from 'ngrx-store-localstorage';

export function localStorageSyncReducer(reducer: ActionReducer<any>): ActionReducer<any> {
  // Check if localStorage is available (e.g., in the browser environment)
  if (typeof window !== 'undefined' && window.localStorage) {
    return localStorageSync({ keys: ['cart'] })(reducer);
  }
  return reducer; // Return the original reducer if localStorage is not available
}
