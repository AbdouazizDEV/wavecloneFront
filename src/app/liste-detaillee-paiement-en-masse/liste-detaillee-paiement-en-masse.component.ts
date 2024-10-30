import { Component } from '@angular/core';
import {SidebarComponent} from '../sidebar/sidebar.component';
import {NavBarComponent} from '../nav-bar/nav-bar.component';
import {MobileNavbarComponent} from '../mobile-navbar/mobile-navbar.component';
@Component({
  selector: 'app-liste-detaillee-paiement-en-masse',
  standalone: true,
  imports: [SidebarComponent,NavBarComponent,MobileNavbarComponent],
  templateUrl: './liste-detaillee-paiement-en-masse.component.html',
  styleUrl: './liste-detaillee-paiement-en-masse.component.css'
})
export class ListeDetailleePaiementEnMasseComponent {

}
