import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { MenuState } from '../state/menu.state';
import { Pizza } from '../models/pizza.model';

@Injectable({
  providedIn: 'root',
})
export class MenuService {
  http = inject(HttpClient);
  menu = inject(MenuState);

  getPizzas(){
    if(this.menu.menu().length > 0) return;
    this.http.get<Pizza[]>('https://my-json-server.typicode.com/zoelounge/menupizza/cards')
    .subscribe((pizzas) => {
      console.log('Pizza data fetched:', pizzas);
      this.menu.setMenu(pizzas);});
  }
  
  deletePizzaById(id: number){
    this.menu.deletePizzaById(id);
  }
}