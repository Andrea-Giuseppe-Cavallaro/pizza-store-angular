import { ChangeDetectionStrategy, Component, computed, inject, signal } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { MenuState } from '../../state/menu.state';
import { Pizza } from '../../models/pizza.model';
import { CartCard } from './cart.card';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [RouterLink, CartCard],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="container py-4 py-lg-5 min-vh-100">
      <div class="d-flex align-items-end justify-content-between mb-3 pt-5">
        <div>
          <h2 class="mb-1">Cart</h2>
          <div class="text-secondary">Order summary</div>
        </div>

        <div class="card bg-black bg-opacity-25 border border-light border-opacity-10 rounded-4 px-3 py-2 shadow-sm">
          <div class="small text-secondary">Total</div>
          <div class="fs-5 fw-semibold text-warning">{{ total() }} €</div>
        </div>
      </div>

      @if (items().length === 0) {
        <div class="card bg-black bg-opacity-25 border border-light border-opacity-10 rounded-4 shadow-sm">
          <div class="card-body text-center py-5">
            <h4 class="mb-2 text-white fw-semibold">Cart is empty</h4>
            <a class="btn btn-outline-light rounded-3 px-4" routerLink="/menu">Go to menu</a>
          </div>
        </div>
      } @else {
        <div class="vstack gap-3">
          @for (pizza of items(); track pizza.id) {
            <app-cart-card
              [pizza]="pizza"
              (add)="setQuantity(pizza.id, pizza.quantity + 1)"
              (remove)="setQuantity(pizza.id, pizza.quantity - 1)"
              (delete)="setQuantity($event, 0)"
            />
          }
        </div>

        <div class="d-flex justify-content-end mt-4">
          <button
            class="btn btn-warning text-dark fw-semibold px-4"
            type="button"
            (click)="showModal.set(true)">
            Checkout
          </button>
        </div>
      }
    </div>

    @if (showModal()) {
      <div class="modal fade show d-block" tabindex="-1" role="dialog" aria-modal="true">
        <div class="modal-dialog modal-dialog-centered" role="document">
          <div class="modal-content bg-dark text-light border border-light border-opacity-10 rounded-4 shadow">
            <div class="modal-header border-bottom border-light border-opacity-10">
              <h5 class="modal-title text-white fw-semibold">Checkout</h5>
              <button
                type="button"
                class="btn-close btn-close-white"
                aria-label="Close"
                (click)="showModal.set(false)">
              </button>
            </div>

            <div class="modal-body">
              <div class="d-flex justify-content-between align-items-center">
                <div class="text-secondary">Total</div>
                <div class="fs-5 fw-semibold text-warning">{{ total() }} €</div>
              </div>
            </div>

            <div class="modal-footer border-top border-light border-opacity-10">
              <button type="button" class="btn btn-outline-light" (click)="showModal.set(false)">
                Cancel
              </button>
              <button type="button" class="btn btn-warning text-dark fw-semibold" (click)="backHomeAndReset()">
                Confirm order
              </button>
            </div>
          </div>
        </div>
      </div>

      <div class="modal-backdrop fade show" (click)="showModal.set(false)"></div>
    }
  `,
})
export class Cart {
  private menuState = inject(MenuState);
  private router = inject(Router);

  showModal = signal(false);

  items = computed(() => this.menuState.menu().filter(pizza => pizza.quantity > 0));

  total = computed(() =>
    this.items().reduce((sum, pizza) => sum + pizza.price * pizza.quantity, 0)
  );

  backHomeAndReset() {
    const resetMenu = this.menuState.menu().map(pizza => ({ ...pizza, quantity: 0 }));
    this.menuState.setMenu(resetMenu);
    this.showModal.set(false);
    this.router.navigateByUrl('');
  }

  setQuantity(id: number, quantity: number) {
    this.menuState.setMenu(
      this.menuState.menu().map(pizza => (pizza.id === id ? { ...pizza, quantity } : pizza))
    );
  }
}