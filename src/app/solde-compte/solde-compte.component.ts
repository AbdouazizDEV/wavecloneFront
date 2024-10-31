import { Component } from '@angular/core';
import {ContenerComponent} from '../contener/contener.component';
import {SidebarComponent} from '../sidebar/sidebar.component';
import {NavBarComponent} from '../nav-bar/nav-bar.component';
import {MobileNavbarComponent} from '../mobile-navbar/mobile-navbar.component';
import { CommonModule } from '@angular/common';
import {BankCardComponent} from '../bank-card/bank-card.component';
import {ActionButtonsComponent} from '../action-buttons/action-buttons.component';
@Component({
  selector: 'app-solde-compte',
  standalone: true,
  imports: [ContenerComponent, SidebarComponent, NavBarComponent, MobileNavbarComponent,CommonModule,BankCardComponent,ActionButtonsComponent], 
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
  currentIndex = 0;  // Index de la carte actuellement visible en mobile

  cards = [
    {
      type: 'balance',
      bankName: 'Carte Bancaire virtuelle', 
      balance: 89400,
      logoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOKxIPYZLqBJeKt2WTLZ3ZU-Z9nQkRBXPGJQ&s',
      qrCodeUrl: 'https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=1234567890'
    },
    {
      type: 'info',
      bankName: 'Carte Bancaire',
      userName: 'Jane Doe',
      logoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOKxIPYZLqBJeKt2WTLZ3ZU-Z9nQkRBXPGJQ&s',
      qrCodeUrl: 'https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=0987654321'
    }
  ];

  showNext() {
    if (this.currentIndex < this.cards.length - 1) {
      this.currentIndex++;
    }
  }

  showPrevious() {
    if (this.currentIndex > 0) {
      this.currentIndex--;
    }
  }
  /* cards = [
    { type: 'balance', bankName: 'Ma Banque', balance: 5000, qrCodeUrl: 'https://example.com/qr1.png', logoUrl: 'https://example.com/logo1.png', userName: 'Utilisateur 1' },
    { type: 'info', bankName: 'Ma Banque', qrCodeUrl: 'https://example.com/qr2.png', logoUrl: 'https://example.com/logo2.png', userName: 'Utilisateur 2' }
  ]; */

  handleWithdraw() {
    console.log('Action Retirer exécutée');
    // Ajouter ici la logique de retrait
  }

  handleTransfer() {
    console.log('Action Transférer exécutée');
    // Ajouter ici la logique de transfert
  }

  handleDeposit() {
    console.log('Action Dépôt exécutée');
    // Ajouter ici la logique de dépôt
  }
}
