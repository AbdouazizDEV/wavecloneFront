import { Component } from '@angular/core';
import {SidebarComponent} from '../sidebar/sidebar.component';
import {NavBarComponent} from '../nav-bar/nav-bar.component';
import {MobileNavbarComponent} from '../mobile-navbar/mobile-navbar.component';
@Component({
  selector: 'app-fonds',
  standalone: true,
  imports: [SidebarComponent,NavBarComponent,MobileNavbarComponent],
  templateUrl: './fonds.component.html',
  styleUrl: './fonds.component.css'
})
export class FondsComponent {

}
