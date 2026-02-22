import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-page-not-found',
  imports: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="pt-5 vh-100 d-flex flex-column align-items-center justify-content-center gap-3">
      <p>
        Error 404: Page Not Found
      </p>
    </div>
  `,
  styles: ``,
})
export class PageNotFound {

}
