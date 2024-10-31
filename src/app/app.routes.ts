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
import { AuthGuard } from './guards/auth.guard';

export const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'accueil', component: AccueilComponent, canActivate: [AuthGuard] },
  { path: 'paiement-en-masse', component: PaiementEnMasseComponent, canActivate: [AuthGuard] },
  { path: 'factures', component: FacturesComponent, canActivate: [AuthGuard] },
  { path: 'transactions', component: TransactionsComponent, canActivate: [AuthGuard] },
  { path: 'rapports', component: RapportsComponent, canActivate: [AuthGuard] },
  { path: 'fonds', component: FondsComponent, canActivate: [AuthGuard] },
  { path: 'contact', component: ContactComponent, canActivate: [AuthGuard] },
  { path: 'parametres', component: ParametresComponent, canActivate: [AuthGuard] },
  { path: '**', redirectTo: '', pathMatch: 'full' } // Redirection pour les routes inconnues
];
