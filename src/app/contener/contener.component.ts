import { Component } from '@angular/core';
import {PaiementEnMasseComponent} from "../paiement-en-masse/paiement-en-masse.component";
import {ResumeDesPaiementsComponent} from "../resume-des-paiements/resume-des-paiements.component";
import {ListeDetailleePaiementEnMasseComponent} from "../liste-detaillee-paiement-en-masse/liste-detaillee-paiement-en-masse.component";
import {BoutonRejeterComponent} from "../bouton-rejeter/bouton-rejeter.component";
import{BoutonConfirmerComponent} from "../bouton-confirmer/bouton-confirmer.component";
@Component({
  selector: 'app-contener',
  standalone: true,
  imports: [PaiementEnMasseComponent,ResumeDesPaiementsComponent,ListeDetailleePaiementEnMasseComponent,BoutonRejeterComponent,BoutonConfirmerComponent],
  templateUrl: './contener.component.html',
  styleUrl: './contener.component.css'
})
export class ContenerComponent {

}
