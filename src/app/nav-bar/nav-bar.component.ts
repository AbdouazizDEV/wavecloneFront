import { Component, signal, OnInit } from '@angular/core';
import { NgIf } from '@angular/common';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [NgIf],
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  isDropdownOpen = signal(false);
  isSidebarOpen = signal(false);
  isSearchVisible = signal(false);
  user: any = null;

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit() {
    // Souscrit aux informations de l'utilisateur
    this.authService.user$.subscribe(user => {
      this.user = user;
    });
  }

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
        this.router.navigate(['/login']);
      },
      error: (err: Error) => {
        console.error('Erreur lors de la déconnexion', err);
      }
    });
  }
}
