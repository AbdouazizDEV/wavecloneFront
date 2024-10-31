import { Component, signal } from '@angular/core';
import { NgIf } from '@angular/common';
import { AuthService } from '../auth.service'; // Assurez-vous que le chemin est correct
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [NgIf],
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent {
  isDropdownOpen = signal(false);
  isSidebarOpen = signal(false);
  isSearchVisible = signal(false);

  constructor(private authService: AuthService, private router: Router) {}

  toggleSearch() {
    this.isSearchVisible.set(!this.isSearchVisible());
    this.isDropdownOpen.set(false); 
  }

  toggleDropdown() {
    this.isDropdownOpen.set(!this.isDropdownOpen());
  }

  toggleSidebar() {
    this.isSidebarOpen.set(!this.isSidebarOpen());
  }

  logout() {
    this.authService.logout().subscribe({
      next: () => {
        console.log('Déconnexion réussie');
        // Redirigez vers la page de login ou une autre page
        this.router.navigate(['/login']); 
      },
      error: (err:Error) => {
        console.error('Erreur lors de la déconnexion', err);
      }
    });
  }
}
