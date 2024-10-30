import { Component } from '@angular/core';
import {SidebarComponent} from '../sidebar/sidebar.component';
import {NavBarComponent} from '../nav-bar/nav-bar.component';
import {MobileNavbarComponent} from '../mobile-navbar/mobile-navbar.component';
@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [SidebarComponent,NavBarComponent,MobileNavbarComponent],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {

}
