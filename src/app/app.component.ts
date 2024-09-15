import { Component } from '@angular/core';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterModule, RouterOutlet } from '@angular/router';
import { AuthGuard } from './shared/auth-guard.service';
import { MenuService } from './shared/menu.service';
import { MatIconModule } from '@angular/material/icon';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { selectCartItemCount } from './ngrx/shopping/cart/cart.selector';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule, RouterOutlet, RouterModule, MatMenuModule, MatToolbarModule, MatIconModule
  ],
  providers: [
    MenuService, AuthGuard
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'learn angular';
  cartItemCount$: Observable<number>;

  constructor(public menuService: MenuService, private store: Store) {
    this.cartItemCount$ = this.store.select(selectCartItemCount);
  }
}
