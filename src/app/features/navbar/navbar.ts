import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <nav class="navbar navbar-expand-lg fixed-top bg-dark bg-opacity-75 border-bottom border-light border-opacity-10">
      <div class="container">
        <a class="navbar-brand d-flex align-items-center gap-2 " routerLink="/">
          <img src="assets/logo/pizzaLogo.webp" alt="Logo" width="40" height="40" class="rounded-3">
          <span class="fw-semibold text-light">PizzaInn</span>
        </a>

        <button class="navbar-toggler border-0" type="button"
                data-bs-toggle="collapse" data-bs-target="#nav"
                aria-controls="nav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="nav">
          <ul class="navbar-nav ms-auto gap-lg-2">
            <li class="nav-item">
              <a class="nav-link text-white fw-semibold" routerLink="/">Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link text-white fw-semibold" routerLink="/menu" routerLinkActive="active">Menu</a>
            </li>
            <li class="nav-item">
              <a class="nav-link text-white fw-semibold" routerLink="/cart" routerLinkActive="active">Cart</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  `,
  styles: ``,
})
export class Navbar {

}
