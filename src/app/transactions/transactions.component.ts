import { Component } from '@angular/core';
import {SidebarComponent} from '../sidebar/sidebar.component';
import {NavBarComponent} from '../nav-bar/nav-bar.component';
import {MobileNavbarComponent} from '../mobile-navbar/mobile-navbar.component';
import {NgIf} from '@angular/common';
@Component({
  selector: 'app-transactions',
  standalone: true,
  imports: [SidebarComponent,NavBarComponent,MobileNavbarComponent,NgIf],
  templateUrl: './transactions.component.html',
  styleUrl: './transactions.component.css'
})
export class TransactionsComponent {

}
