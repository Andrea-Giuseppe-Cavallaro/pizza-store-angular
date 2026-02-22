import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { MenuState } from '../../state/menu.state';
import { MenuService } from '../../services/menu.service';

@Component({
  selector: 'app-pizza',
  standalone: true,
  imports: [RouterLink],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
      <div class="row justify-content-center w-100 vh-100 align-items-center">
        @if (pizza()) {

        <div class="col-12 col-sm-10 col-md-8 col-lg-5 col-xl-4">
          <div class="card bg-dark text-light border border-light border-opacity-10 rounded-4 shadow overflow-hidden">
            <img
              [src]="pizza()!.image"
              class="card-img-top"
              [alt]="pizza()!.name"
            >

            <div class="card-body p-4">
              <div class="d-flex justify-content-between align-items-start gap-2">
                <h4 class="mb-1 text-white fw-semibold">{{ pizza()!.name }}</h4>
                <span class="badge text-bg-warning text-dark rounded-pill">
                  {{ pizza()!.price }} €
                </span>
              </div>

              <p class="text-secondary mb-4">
                {{ pizza()!.description }}
              </p>

              <div class="d-flex justify-content-center">
                <button class="btn btn-outline-light btn-sm px-4" routerLink="/menu">
                  Back to menu
                </button>
              </div>
            </div>
          </div>
        </div>
    } @else {
      <div class="text-center">
        Pizza not found
        <a class="ms-2" routerLink="/menu">Back to menu</a>
      </div>
    }
          </div>

  `,
})
export class Pizza {
  route = inject(ActivatedRoute);
  menuState = inject(MenuState);
  menuService = inject(MenuService);

  id = Number(this.route.snapshot.paramMap.get('id'));
  pizza = computed(() => this.menuState.menu().find(p => p.id === this.id));

  ngOnInit() {
    if (!this.pizza()) {
      this.menuService.getPizzas();
    }
  }
}