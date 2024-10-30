import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
/* import { NavBarComponent } from './nav-bar/nav-bar.component'; */
/* import {SidebarComponent} from './sidebar/sidebar.component'; */
/* import {MobileNavbarComponent} from './mobile-navbar/mobile-navbar.component'; */
import {ContenerComponent} from './contener/contener.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  // Declare the NavBarComponent here
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'] // Also, note the correction from styleUrl to styleUrls
})
export class AppComponent {
  title = 'waveCloneFront';
}