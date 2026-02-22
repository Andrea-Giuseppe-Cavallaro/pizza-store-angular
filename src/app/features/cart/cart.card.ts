import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { Pizza } from '../../models/pizza.model';

@Component({
  selector: 'app-cart-card',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="card bg-black bg-opacity-25 border border-light border-opacity-10 rounded-4 shadow-sm overflow-hidden">
      <div class="card-body d-flex align-items-center gap-3">
        <img [src]="pizza.image" [alt]="pizza.name" width="72" height="72" class="rounded-3 object-fit-cover">

        <div class="flex-grow-1">
          <div class="d-flex justify-content-between gap-2">
            <div class="fw-semibold text-white fw-semibold">{{ pizza.name }}</div>
            <div class="text-warning fw-semibold">{{ pizza.price }} €</div>
          </div>
          <div class="text-secondary small">Quantity: {{ pizza.quantity }}</div>
        </div>

        <div class="btn-group" role="group">
          <button class="btn btn-outline-light btn-sm" [disabled]="pizza.quantity <= 0" (click)="remove.emit(pizza)">-</button>
          <button class="btn btn-outline-light btn-sm" (click)="add.emit(pizza)">+</button>
        </div>

        <button class="btn btn-outline-danger btn-sm" (click)="delete.emit(pizza.id)">X</button>
      </div>
    </div>
  `,
})
export class CartCard {
  @Input() pizza!: Pizza;

  @Output() add = new EventEmitter<Pizza>();
  @Output() remove = new EventEmitter<Pizza>();
  @Output() delete = new EventEmitter<number>();
}