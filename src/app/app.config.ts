import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { provideClientHydration } from '@angular/platform-browser';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideEffects } from '@ngrx/effects';
import { provideStore } from '@ngrx/store';
import { routes } from './app.routes';
import { CartEffects } from './ngrx/shopping/cart/cart.effect';
import { localStorageSyncReducer } from './store/localStorageSyncReducer';
import { reducers } from './store/reducer';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes), 
    provideClientHydration(), 
    provideAnimations(), 
    provideStore(),    
    provideStore(reducers, { metaReducers: [localStorageSyncReducer] }), // Provide the store here
    provideEffects([CartEffects]), // Optional, only needed if you use NgRx effects
  ]
};
