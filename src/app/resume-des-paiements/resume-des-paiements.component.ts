import { Component } from '@angular/core';
import {SidebarComponent} from '../sidebar/sidebar.component';
import {NavBarComponent} from '../nav-bar/nav-bar.component';
import {MobileNavbarComponent} from '../mobile-navbar/mobile-navbar.component';
@Component({
  selector: 'app-resume-des-paiements',
  standalone: true,
  imports: [SidebarComponent,NavBarComponent,MobileNavbarComponent],
  templateUrl: './resume-des-paiements.component.html',
  styleUrl: './resume-des-paiements.component.css'
})
export class ResumeDesPaiementsComponent {

}
