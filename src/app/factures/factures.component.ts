import { Component } from '@angular/core';
import {SidebarComponent} from '../sidebar/sidebar.component';
import {NavBarComponent} from '../nav-bar/nav-bar.component';
import {MobileNavbarComponent} from '../mobile-navbar/mobile-navbar.component';
@Component({
  selector: 'app-factures',
  standalone: true,
  imports: [SidebarComponent,NavBarComponent,MobileNavbarComponent],
  templateUrl: './factures.component.html',
  styleUrl: './factures.component.css'
})
export class FacturesComponent {

}
