import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Pizza } from '../../models/pizza.model';

@Component({
  selector: 'app-menu-card',
  standalone: true,
  imports: [RouterLink],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="h-100 card bg-dark text-light border border-light border-opacity-10 rounded-4 shadow overflow-hidden">
      <a class="d-block" [routerLink]="['/menu', pizza.id]">
        <div class="ratio ratio-4x3">
          <img [src]="pizza.image" class="w-100 h-100 object-fit-cover" [alt]="pizza.name">
        </div>
      </a>

      <div class="card-body d-flex flex-column">
        <div class="d-flex justify-content-between align-items-start gap-2 mb-3">
          <h5 class="mb-1 text-white fw-semibold">{{ pizza.name }}</h5>
          <span class="badge text-bg-warning text-dark rounded-pill">{{ pizza.price }} €</span>
        </div>

        <div class="mt-auto d-flex align-items-center justify-content-between">
          <div class="btn-group" role="group" aria-label="quantity">
            <button class="btn btn-outline-light btn-sm"
                    [disabled]="pizza.quantity <= 0"
                    (click)="remove.emit(pizza)">-</button>
            <button class="btn btn-outline-light btn-sm disabled">{{ pizza.quantity }}</button>
            <button class="btn btn-outline-light btn-sm"
                    (click)="add.emit(pizza)">+</button>
          </div>

          <button class="btn btn-link text-danger text-decoration-none p-0"
                  (click)="delete.emit(pizza.id)">
            Delete
          </button>
        </div>
      </div>
    </div>
  `,
})
export class MenuCard {
  @Input() pizza!: Pizza;

  @Output() add = new EventEmitter<Pizza>();
  @Output() remove = new EventEmitter<Pizza>();
  @Output() delete = new EventEmitter<number>();
}