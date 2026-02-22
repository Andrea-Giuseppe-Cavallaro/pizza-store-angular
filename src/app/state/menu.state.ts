import { Injectable, signal } from '@angular/core';
import { Pizza } from '../models/pizza.model';

@Injectable({ providedIn: 'root' })
export class MenuState {
  public menu = signal<Pizza[]>([]);

  setMenu(menu: Pizza[]) {
    this.menu.set(menu);
  }

  deletePizzaById(id: number) {
    this.menu.update(list => list.filter(pizza => pizza.id !== id));
  }
}

