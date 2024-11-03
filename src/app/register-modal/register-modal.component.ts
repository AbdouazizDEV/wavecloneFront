import { Component,Output, EventEmitter  } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AuthService } from '../auth.service';
@Component({
  selector: 'app-register-modal',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './register-modal.component.html',
  styleUrls: ['./register-modal.component.css'],
})
export class RegisterModalComponent {
  
  roles = [
    { name: 'client', id: 4 },
    { name: 'agentwave', id: 3 },
    { name: 'vendeur', id: 2 }
  ];
  user = {
    nom: '',
    prenom: '',
    telephone: '',
    email: '',
    solde: 5000,
    promo: 10,
    etatCarte: true,
    roleId: 4  // Valeur par défaut sans sélection
  };
  constructor(private authService: AuthService) {}

  register() {
    // Convertir roleId en entier pour éviter l'erreur de type dans Prisma
    this.user.roleId = Number(this.user.roleId);
  
    this.authService.register(this.user).subscribe({
      next: (response) => {
        console.log('Inscription réussie:', response);
        alert('Inscription réussie ! Vérifiez vos messages pour le code de confirmation.');
        this.closeRegisterModal(); // Ferme le modal après l'inscription
      },
      error: (error) => {
        console.error('Erreur lors de l’inscription:', error);
        alert(error.error?.message || 'Erreur lors de l’inscription');
      }
    });
  }
  
  // Déclaration de l'état du modal (visible par défaut pour test)
  showRegisterModal = true;


  closeRegisterModal() {
    this.showRegisterModal = false;  // Masquer le modal
  }
}
