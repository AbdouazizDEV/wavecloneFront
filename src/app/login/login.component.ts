import { Component } from '@angular/core';
import { NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { RegisterModalComponent } from '../register-modal/register-modal.component';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [NgIf, FormsModule, RegisterModalComponent],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  phoneNumber: string = '';
  phoneSubmitted: boolean = false;
  code: string[] = ['', '', '', ''];
  showRegisterModal: boolean = false;

  constructor(private authService: AuthService, private router: Router) {}

  // Méthode pour soumettre le numéro de téléphone
  onPhoneSubmit() {
    if (this.phoneNumber.length === 9) {
      this.phoneSubmitted = true;
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
          this.router.navigate(['/accueil'])
            .then(success => console.log('Redirection réussie:', success))
            .catch(err => console.error('Erreur de redirection:', err));
        },
        error: (error) => {
          alert(error.error?.error || 'Erreur lors de la connexion');
        }
      });
    } else {
      alert("Veuillez entrer un code à quatre chiffres.");
    }
  }

  // Méthode pour ouvrir le modal d'inscription
  openRegisterModal() {
    this.showRegisterModal = true;
  }

  // Méthode pour fermer le modal d'inscription
  closeRegisterModal() {
    this.showRegisterModal = false;
  }
}
