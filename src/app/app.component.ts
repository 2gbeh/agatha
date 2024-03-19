import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { LogoComponent } from './logo/logo.component';
import { MenuComponent } from './menu/menu.component';
import { SocialComponent } from './social/social.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    //
    LogoComponent,
    MenuComponent,
    SocialComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'webmaster';
}
