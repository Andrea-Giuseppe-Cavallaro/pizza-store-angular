import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from "./features/navbar/navbar";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Navbar],
  template: `
    <app-navbar />

  <div class="bg-dark text-light">
    <router-outlet />
  </div>
  `,
  styles: [],
})
export class App {
}
