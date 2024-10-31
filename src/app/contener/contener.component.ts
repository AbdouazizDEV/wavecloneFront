

import { Component } from '@angular/core';
import {PaiementEnMasseComponent} from "../paiement-en-masse/paiement-en-masse.component";
import {ResumeDesPaiementsComponent} from "../resume-des-paiements/resume-des-paiements.component";
import {ListeDetailleePaiementEnMasseComponent} from "../liste-detaillee-paiement-en-masse/liste-detaillee-paiement-en-masse.component";
@Component({
  selector: 'app-contener',
  standalone: true,
  imports: [PaiementEnMasseComponent,ResumeDesPaiementsComponent,ListeDetailleePaiementEnMasseComponent],
  templateUrl: './contener.component.html',
  styleUrl: './contener.component.css'
})
export class ContenerComponent {
  // Your code here
  
}
