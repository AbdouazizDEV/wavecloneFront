import { Component } from '@angular/core';
import { NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms'; // Importer FormsModule pour ngModel
import { Router } from '@angular/router'; // Importer le Router

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [NgIf, FormsModule], // Ajouter FormsModule dans les imports
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  phoneNumber: string = '';
  phoneSubmitted: boolean = false;
  code: string[] = ['', '', '', ''];
  constructor(private router: Router) { } // Injecter le Router

  // Méthode pour soumettre le numéro de téléphone
  onPhoneSubmit() {
    if (this.phoneNumber.length === 9) { // Validation du format du numéro
      this.phoneSubmitted = true; // Afficher la section du code PIN
      console.log('Connexion réussie avec le numéro :', this.phoneNumber);
      // Logique additionnelle pour la connexion
    } else {
      alert("Veuillez entrer un numéro de téléphone valide.");
    }
  }

  // Méthode pour soumettre le code PIN
  onLogin() {
    const pin = this.code.join('');
    if (pin.length === 4) { // Vérifie que le code PIN est complet
      console.log('Connexion réussie avec le code :', pin);
      // Logique additionnelle pour la connexion
      //redirection vers la page d'accueil
      this.router.navigate(['/accueil']); // Maintenant, vous pouvez utiliser le router
    } else {
      alert("Veuillez entrer un code à quatre chiffres.");
    }
  }
}