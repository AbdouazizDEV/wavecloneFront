import { Component } from '@angular/core';
import { NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';  // Assurez-vous du bon chemin d'import

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [NgIf, FormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  phoneNumber: string = '';
  phoneSubmitted: boolean = false;
  code: string[] = ['', '', '', ''];

  constructor(private authService: AuthService, private router: Router) {}

  // Méthode pour soumettre le numéro de téléphone
  onPhoneSubmit() {
    if (this.phoneNumber.length === 9) {
      this.phoneSubmitted = true; // Afficher la section du code PIN
    } else {
      alert("Veuillez entrer un numéro de téléphone valide.");
    }
  }

  // Méthode pour soumettre le code PIN
  onLogin() {
    const pin = this.code.join('');
    if (pin.length === 4) {
      this.authService.login(this.phoneNumber, pin).subscribe({
        next: (response) => {
          console.log('Connexion réussie', response);
          this.router.navigate(['/accueil']);
        },
        error: (error) => {
          alert(error.error?.error || 'Erreur lors de la connexion');
        }
      });
    } else {
      alert("Veuillez entrer un code à quatre chiffres.");
    }
  }
}
