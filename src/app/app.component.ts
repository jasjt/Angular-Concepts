import { Component } from '@angular/core';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterModule, RouterOutlet } from '@angular/router';
import { AuthGuard } from './shared/auth-guard.service';
import { MenuService } from './shared/menu.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet, RouterModule, MatMenuModule, MatToolbarModule  
  ],
  providers: [MenuService, AuthGuard],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'online-store';
  constructor(public menuService: MenuService) {}
}
