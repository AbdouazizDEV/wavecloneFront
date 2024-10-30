import { Component } from '@angular/core';
import {ContenerComponent} from '../contener/contener.component';
import { RouterOutlet } from '@angular/router';
import {SidebarComponent} from '../sidebar/sidebar.component';
import {NavBarComponent} from '../nav-bar/nav-bar.component';
import {MobileNavbarComponent} from '../mobile-navbar/mobile-navbar.component';
import {SoldeCompteComponent} from '../solde-compte/solde-compte.component';
import {TransactionsComponent} from '../transactions/transactions.component';


@Component({
  selector: 'app-accueil',
  standalone: true,
  imports: [ContenerComponent,RouterOutlet,SidebarComponent,NavBarComponent,MobileNavbarComponent,SoldeCompteComponent,TransactionsComponent],
  templateUrl: './accueil.component.html',
  styleUrl: './accueil.component.css'
})
export class AccueilComponent {
  transactions = [
    { id: 1,num: 1, type: 'Achat', date: '2023-08-01', description: 'Laptop', montant: 1000 },
    { id: 2, date: '2023-08-02', montant: 200 },  
    { id: 3, date: '2023-08-03', montant: 300 },
  ];
}
