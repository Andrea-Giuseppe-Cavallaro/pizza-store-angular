import { Component, inject, ChangeDetectionStrategy } from '@angular/core';
import { MenuService } from '../../services/menu.service';
import { MenuState } from '../../state/menu.state';
import { Pizza } from '../../models/pizza.model';
import { MenuCard } from './menu.card';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [MenuCard],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
  <div class="container py-4 py-lg-5">
    <div class="d-flex flex-wrap align-items-end justify-content-between gap-2 mb-3 pt-5">
      <div>
        <h2 class="mb-1">Menu</h2>
        <div class="text-secondary">Choose your pizza and add it to the cart</div>
      </div>
    </div>

    <div class="row g-4">
      @for (pizza of menuState.menu(); track pizza.id) {
        <div class="col-12 col-sm-6 col-lg-4 col-xl-3">
          <app-menu-card
            [pizza]="pizza"
            (add)="onAdd($event)"
            (remove)="onRemove($event)"
            (delete)="onDelete($event)"
          />
        </div>
      }
    </div>
  </div>
  `,
})
export class Menu {
  menuService = inject(MenuService);
  menuState = inject(MenuState);

  ngOnInit() {
    this.menuService.getPizzas();
  }

  onAdd(pizza: Pizza) {
    this.setQuantity(pizza, pizza.quantity + 1);
  }

  onRemove(pizza: Pizza) {
    this.setQuantity(pizza, pizza.quantity - 1);
  }

  onDelete(id: number) {
    this.menuState.deletePizzaById(id);
  }

  private setQuantity(pizza: Pizza, quantity: number) {
    this.menuState.setMenu(
      this.menuState.menu().map(item =>
        item.id === pizza.id ? { ...item, quantity } : item
      )
    );
  }
}