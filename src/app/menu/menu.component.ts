import { Component } from '@angular/core';
import type { TMenu } from './menu.type';
import * as MENU from './MENU';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [],
  template: `
    <nav class="pill-group">
      @for (e of data; track e.text) {
      <a
        class="pill"
        [href]="e?.path ? baseUrl + e.path : baseUrl"
        target="_blank"
        rel="noopener"
      >
        <span>{{ e.text }}</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="14"
          viewBox="0 -960 960 960"
          width="14"
          fill="currentColor"
        >
          <path
            d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h280v80H200v560h560v-280h80v280q0 33-23.5 56.5T760-120H200Zm188-212-56-56 372-372H560v-80h280v280h-80v-144L388-332Z"
          />
        </svg>
      </a>
      }
    </nav>
  `,
  styleUrl: './menu.component.scss',
})
export class MenuComponent {
  readonly baseUrl = 'https://angular.dev';

  data: TMenu[] = MENU.menuItems;
}
