import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { MenuService } from './shared/menu.service';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { ProductListComponent } from './feature/product/product-list/product-list.component';
import { CartComponent } from './feature/shopping/cart/cart.component';
import { HistoryComponent } from './feature/orders/history/history.component';
import { CommonUtilitiesModule } from './common-utilities/common-utilities.module';
import { ReactiveFormComponent } from './form/reactive-form/reactive-form.component';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import { TemplateFormComponent } from './form/template-form/template-form.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet, CommonModule, CommonUtilitiesModule, 
    NavbarComponent, ProductListComponent, CartComponent, HistoryComponent,
    ReactiveFormComponent, TemplateFormComponent, 
    MatMenuModule, MatToolbarModule, RouterModule
  ],
  providers: [MenuService],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'online-store';
  constructor(public menuService: MenuService) {}
}
