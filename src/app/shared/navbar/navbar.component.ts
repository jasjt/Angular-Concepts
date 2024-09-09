import { Component } from '@angular/core';
import { MenuService } from '../menu.service';
import { MatMenuModule } from '@angular/material/menu';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, MatMenuModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

  constructor(public menuService: MenuService){}

  setMenu(item: string){
    this.menuService.currentMenu = item;
  }
}
