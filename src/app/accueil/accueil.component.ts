import { Component } from '@angular/core';
import {ContenerComponent} from '../contener/contener.component';
import { RouterOutlet } from '@angular/router';
import {SidebarComponent} from '../sidebar/sidebar.component';
import {NavBarComponent} from '../nav-bar/nav-bar.component';
import {MobileNavbarComponent} from '../mobile-navbar/mobile-navbar.component';
@Component({
  selector: 'app-accueil',
  standalone: true,
  imports: [ContenerComponent,RouterOutlet,SidebarComponent,NavBarComponent,MobileNavbarComponent],
  templateUrl: './accueil.component.html',
  styleUrl: './accueil.component.css'
})
export class AccueilComponent {

}
