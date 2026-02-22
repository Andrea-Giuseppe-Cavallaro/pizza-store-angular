import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div id="carouselExampleAutoplaying"
         class="carousel slide vh-100 pt-5"
         data-bs-touch="false">

      <div class="carousel-inner h-100">

        <!-- SLIDE 1 -->
        <div class="carousel-item active h-100">
          <div class="container h-100">
            <div class="row h-100 align-items-center g-4">

              <div class="col-12 col-md-6 text-center text-md-start">
                <h1 class="fw-bold display-4 mb-3">PizzaInn</h1>
                <p class="lead mb-3">
                  We are proud of one thing <strong>delicious pizzas.</strong>
                  Long-fermented dough and baked in a stone oven for a crispy crust
                  and a soft, airy center.
                </p>
              </div>

              <div class="col-12 col-md-6">
                <img src="assets/carosel/carosel1.webp"
                     class="d-block w-100 rounded-3 shadow"
                     alt="Pizza cotta in forno a pietra">
              </div>

            </div>
          </div>
        </div>

        <!-- SLIDE 2: MAPPA -->
        <div class="carousel-item h-100">
          <div class="container h-100">
            <div class="row h-100 align-items-center g-4">

              <div class="col-12 col-md-5 text-center text-md-start">
                <h2 class="fw-bold mb-3">How to reach us</h2>
                <p class="lead mb-0">
                  Find the fastest route to <strong>PizzaInn</strong>.
                </p>
                <p class="text-secondary mt-2 mb-0">
                  You can zoom and drag the map directly here.
                </p>
              </div>

              <div class="col-12 col-md-7">
                <div class="ratio ratio-4x3 rounded-3 overflow-hidden shadow">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d695.7789908816038!2d15.087028092121981!3d37.51707379032439!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1313fcd0448dfc77%3A0x8cf0de217302c243!2sPizza%20Inn!5e0!3m2!1sit!2sit!4v1771783842014!5m2!1sit!2sit"
                    class="w-100 h-100 border-0"
                    allowfullscreen
                    loading="lazy"
                    referrerpolicy="no-referrer-when-downgrade">
                  </iframe>
                </div>
              </div>

            </div>
          </div>
        </div>


        <div class="carousel-item  h-100">
          <div class="container h-100">
            <div class="row h-100 align-items-center g-4">

                  <div class="col-12 col-md-6 ps-md-5 text-center text-light">
                    <h2 class="fw-bold mb-4">Contacts</h2>
                    <ul class="list-unstyled fs-5 mb-0">
                      <li class="mb-3"><strong>Address:</strong><br>Via Roma 123, Catania</li>
                      <li class="mb-3"><strong>Phone:</strong><br>+39 012 345 6789</li>
                      <li class="mb-3"><strong>Email:</strong><br>info&#64;pizzainn.com</li>
                      <li><strong>Opening hours:</strong><br>Mon-Sun: 18:00 - 23:30</li>
                    </ul>
                  </div>

                  <div class="d-none d-md-block col-md-6 h-100">
                    <div class="h-100 contacts-panel"></div>
                  </div>

          </div>
        </div>

      </div>

      <!-- CONTROLLI -->
      <button class="carousel-control-prev" type="button"
              data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
        <span class="carousel-control-prev-icon"></span>
        <span class="visually-hidden">Previous</span>
      </button>

      <button class="carousel-control-next" type="button"
              data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
        <span class="carousel-control-next-icon"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
  `,
  styles: [`
    .carousel-img {
      object-fit: cover;
    }

    .contacts-panel{
      background-image: url('../../../assets/carosel/carosel2.avif');
      background-size: contain;
      background-repeat: no-repeat;
      background-position: center right;
      border-top-left-radius: 1rem;
      border-bottom-left-radius: 1rem;
    }
  `],
})
export class Home {}