import { Component } from '@angular/core';
import {ContenerComponent} from '../contener/contener.component';
import {SidebarComponent} from '../sidebar/sidebar.component';
import {NavBarComponent} from '../nav-bar/nav-bar.component';
import {MobileNavbarComponent} from '../mobile-navbar/mobile-navbar.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-solde-compte',
  standalone: true,
  imports: [ContenerComponent, SidebarComponent, NavBarComponent, MobileNavbarComponent,CommonModule], 
  templateUrl: './solde-compte.component.html',
  styleUrl: './solde-compte.component.css'
})
export class SoldeCompteComponent {
  transactions = [
    {
      montant: 1000,
      Destinataire: 'Alla Diop',
      agent: 'Mbaye',
      expediteur: 'Houssame',
      type: 'Retrait'
    },
    // Add more transactions as needed
    {
      montant: 1000,
      Destinataire: 'Alla Diop',
      agent: 'Mbaye',
      expediteur: 'Houssame',
      type: 'Retrait'
    },
    {
      montant: 1000,
      Destinataire: 'Alla Diop',
      agent: 'Mbaye',
      expediteur: 'Houssame',
      type: 'Retrait'
    },
    {
      montant: 1000,
      Destinataire: 'Alla Diop',
      agent: 'Mbaye',
      expediteur: 'Houssame',
      type: 'Retrait'
    }
  ];
}
