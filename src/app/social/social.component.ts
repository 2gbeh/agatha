import { Component } from '@angular/core';
import type { TSocial } from './social.type';
import * as SOCIAL from './SOCIAL';

@Component({
  selector: 'app-social',
  standalone: true,
  imports: [],
  template: `
    <div class="social-links">
      @for (e of data; track e.text) {
      <a
        [href]="e.url"
        [attr.aria-label]="e.text"
        target="_blank"
        rel="noopener"
      >
        <img
          class=""
          [src]="'/assets/' + e.src"
          [alt]="e.text"
          [title]="e.text"
          width="32"
          aria-hidden="true"
        />
      </a>
      }
    </div>
  `,
  styleUrl: './social.component.scss',
})
export class SocialComponent {
  readonly baseUrl = 'https://angular.dev';

  data: TSocial[] = SOCIAL.socialLinks;
}
