// src/app/app.routes.ts
import { Routes } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { PaiementEnMasseComponent } from './paiement-en-masse/paiement-en-masse.component';
import { FacturesComponent } from './factures/factures.component';
import { TransactionsComponent } from './transactions/transactions.component';
import { RapportsComponent } from './rapports/rapports.component';
import { FondsComponent } from './fonds/fonds.component';
import { ContactComponent } from './contact/contact.component';
import { ParametresComponent } from './parametres/parametres.component';
import { LoginComponent } from './login/login.component';

export const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'accueil', component: AccueilComponent }, // Route par défaut vers Accueil
  { path: 'paiement-en-masse', component: PaiementEnMasseComponent },
  { path: 'factures', component: FacturesComponent },
  { path: 'transactions', component: TransactionsComponent },
  { path: 'rapports', component: RapportsComponent },
  { path: 'fonds', component: FondsComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'parametres', component: ParametresComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' } // Redirection pour les routes inconnues
];
