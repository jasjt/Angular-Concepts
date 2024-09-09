import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MenuService {
  menuItems: string[];
  private _currentMenu: string = "";

  constructor() { 
    this.menuItems = ['Product', 'Shopping', 'Order'];
  }

  get currentMenu(): string {
    return this._currentMenu;
  }

  set currentMenu(value: string) {
    this._currentMenu = value;
  }
}
