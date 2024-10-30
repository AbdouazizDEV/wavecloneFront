import { Component,signal} from '@angular/core';
import {NgIf} from '@angular/common';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [NgIf],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css'
})
export class NavBarComponent {
   // Signal pour gérer la visibilité du menu déroulant
   isDropdownOpen = signal(false);
   isSidebarOpen = signal(false);
  // Signal pour gérer la visibilité du champ de recherche
  isSearchVisible = signal(false);
// Fonction pour toggler l'affichage du champ de recherche et doit mettre à hedden le div qui contien  Informations de l'utilisateur et icône pour le menu déroulant
   toggleSearch() {
     this.isSearchVisible.set(!this.isSearchVisible());
     this.isDropdownOpen.set(false); // Pour éviter que le menu déroulant s'ouvre lorsque le champ de recherche est affiché
     //il fait masquer le menu déroulant  
    
   }
   // Fonction pour toggler l'affichage du menu déroulant
   toggleDropdown() {
     this.isDropdownOpen.set(!this.isDropdownOpen());
   }

   // Fonction pour toggler l'ouverture du menu déroulant
 
   // Fonction pour toggler l'ouverture de la sidebar
   toggleSidebar() {
     this.isSidebarOpen.set(!this.isSidebarOpen());
   }
 
   // Méthode de déconnexion (fonctionalité à définir)
   logout() {
     console.log('Déconnexion');
     // Logique de déconnexion ici, par exemple redirection vers la page de login
   }
}
