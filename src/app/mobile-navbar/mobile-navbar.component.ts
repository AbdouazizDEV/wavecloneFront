import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
@Component({
  selector: 'app-mobile-navbar',
  standalone: true,
  imports: [CommonModule, MatIconModule],
  templateUrl: './mobile-navbar.component.html',
  styleUrl: './mobile-navbar.component.css'
})
export class MobileNavbarComponent {
  public sidebarOpen() {
    return false;
  }

  public toggleSidebar() {
    this.sidebarOpen();
  }

}
