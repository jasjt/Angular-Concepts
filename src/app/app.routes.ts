import { Routes } from '@angular/router';
import { HomeComponent } from './routing/home/home.component';
import { AuthGuard } from './shared/auth-guard.service';

export const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },  // Default route
    { path: 'home', component: HomeComponent },            // Basic route

    //Lazy loading standalone components
    { path: 'about', loadComponent: () => import('./routing/about/about.component').then(m => m.AboutComponent) },
    { path: 'contact', loadComponent: () => import('./routing/contact/contact.component').then(m => m.ContactComponent) },
    { path: 'template-form', loadComponent: () => import('./form/template-form/template-form.component').then(m => m.TemplateFormComponent) },
    { path: 'reactive-form', loadComponent: () => import('./form/reactive-form/reactive-form.component').then(m => m.ReactiveFormComponent) },
    { path: 'product-list', loadComponent: () => import('./feature/product/product-list/product-list.component').then(m => m.ProductListComponent) },
    { path: 'shopping', loadComponent: () => import('./feature/shopping/cart/cart.component').then(m => m.CartComponent) },
    { path: 'order', loadComponent: () => import('./feature/orders/history/history.component').then(m => m.HistoryComponent) },
    { path: 'mat-table', loadComponent: () => import('./material/material-table/material-table.component').then(m => m.MaterialTableComponent) },
    { path: 'product', loadComponent: () => import('./routing/product/product.component').then(m => m.ProductComponent) },
    { path: 'product/:id', loadComponent: () => import('./routing/product-detail/product-detail.component').then(m => m.ProductDetailComponent) },

    // Child Route
    { 
      path: 'admin', 
      loadComponent: () => import('./routing/admin/admin.component').then(m => m.AdminComponent), 
      canActivate: [AuthGuard],     // Route Guard
      children: [
        { path: 'dashboard', loadComponent: () => import('./routing/admin/admin.component').then(m => m.AdminComponent) },
        { path: 'settings', loadComponent: () => import('./routing/admin/admin.component').then(m => m.AdminComponent) }
      ] 
    },

    // Wildcard Route (for 404 page)
    { path: '**', loadComponent: () => import('./routing/not-found/not-found.component').then(m => m.NotFoundComponent) },  // Wildcard for undefined routes
];
