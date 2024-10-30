import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule, MatIconModule],
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  
  isSidebarOpen = false;
  // Méthode pour afficher ou masquer le menu latéral
  toggleSidebar() {
    this.isSidebarOpen = !this.isSidebarOpen;
  }
}
