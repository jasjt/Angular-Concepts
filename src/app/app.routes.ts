import { Routes } from '@angular/router';
import { ReactiveFormComponent } from './form/reactive-form/reactive-form.component';
import { TemplateFormComponent } from './form/template-form/template-form.component';
import { HomeComponent } from './routing/home/home.component';
import { AboutComponent } from './routing/about/about.component';
import { ContactComponent } from './routing/contact/contact.component';
import { AdminComponent } from './routing/admin/admin.component';
import { NotFoundComponent } from './routing/not-found/not-found.component';
import { ProductDetailComponent } from './routing/product-detail/product-detail.component';
import { ProductComponent } from './routing/product/product.component';
import { AuthGuard } from './shared/auth-guard.service';
import { CartComponent } from './feature/shopping/cart/cart.component';
import { HistoryComponent } from './feature/orders/history/history.component';
import { ProductListComponent } from './feature/product/product-list/product-list.component';
import { MaterialTableComponent } from './material/material-table/material-table.component';

export const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },  // Default route
    { path: 'home', component: HomeComponent },            // Basic route
    { path: 'about', component: AboutComponent },          // Basic route
    { path: 'contact', component: ContactComponent },      // Basic route

    { path: 'template-form', component: TemplateFormComponent },      // Basic route
    { path: 'reactive-form', component: ReactiveFormComponent },      // Basic route
    { path: 'product', component: ProductListComponent },      // Basic route
    { path: 'shopping', component: CartComponent },      // Basic route
    { path: 'order', component: HistoryComponent },      // Basic route
    { path: 'mat-table', component: MaterialTableComponent },      // Basic route
  
    // Parameterized Route
    { path: 'product', component: ProductComponent },      
    { path: 'product/:id', component: ProductDetailComponent },  // Route with parameter
  
    // Child Route
    { 
      path: 'admin', 
      component: AdminComponent, 
      canActivate: [AuthGuard],     // Route Guard
      children: [
        { path: 'dashboard', component: AdminComponent },
        { path: 'settings', component: AdminComponent }
      ] 
    },
  
    // Lazy Loading (Feature module) - Create a new module and lazy load it
    { 
      path: 'lazy', 
      loadChildren: () => import('./routing/lazy/lazy.module').then(m => m.LazyModule) 
    },
  
    // Wildcard Route (for 404 page)
    { path: '**', component: NotFoundComponent },  // Wildcard for undefined routes
];
