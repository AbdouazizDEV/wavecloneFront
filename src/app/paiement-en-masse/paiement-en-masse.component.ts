import { Component,signal } from '@angular/core';
import {SidebarComponent} from '../sidebar/sidebar.component';
import {NavBarComponent} from '../nav-bar/nav-bar.component';
import {MobileNavbarComponent} from '../mobile-navbar/mobile-navbar.component';
import {ListeDetailleePaiementEnMasseComponent} from "../liste-detaillee-paiement-en-masse/liste-detaillee-paiement-en-masse.component";
import {BoutonRejeterComponent} from "../bouton-rejeter/bouton-rejeter.component";
import{BoutonConfirmerComponent} from "../bouton-confirmer/bouton-confirmer.component";
import { CommonModule } from '@angular/common';
import {ModalUsagersComponent} from "../modal-usagers/modal-usagers.component";
@Component({
  selector: 'app-paiement-en-masse',
  standalone: true,
  imports: [ModalUsagersComponent,CommonModule,SidebarComponent,NavBarComponent,MobileNavbarComponent,ListeDetailleePaiementEnMasseComponent,BoutonRejeterComponent,BoutonConfirmerComponent],
  templateUrl: './paiement-en-masse.component.html',
  styleUrl: './paiement-en-masse.component.css'
})
export class PaiementEnMasseComponent {
  transactions = [
    { id: 1, nom: 'Transaction 1', selected: false },
  ]
  showModal = signal(false);
  usagers = signal([
    { id: 1, nom: 'Usager 1', selected: false },
    { id: 2, nom: 'Usager 2', selected: false },
    { id: 3, nom: 'Usager 3', selected: false },
    // Ajouter d'autres usagers si nécessaire
  ]);

  openModal() {
    this.showModal.set(true);
  }

  closeModal() {
    this.showModal.set(false);
  }

  onConfirmSelection(selectedIds: number[]) {
    console.log("Usagers sélectionnés:", selectedIds);
    // Logique pour gérer les usagers sélectionnés
    this.showModal.set(false);
  }
}
