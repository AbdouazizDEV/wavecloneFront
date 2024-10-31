import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-bank-card',
  imports: [CommonModule],
  templateUrl: './bank-card.component.html',
  styleUrls: ['./bank-card.component.css'],
  standalone: true,
})
export class BankCardComponent {
  @Input() type: 'balance' | 'info' = 'balance';
  @Input() bankName: string = 'BankName';
  @Input() logoUrl: string = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOKxIPYZLqBJeKt2WTLZ3ZU-Z9nQkRBXPGJQ&s';
  @Input() qrCodeUrl: string = 'https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=1234567890';
  @Input() balance: number = 89400;
  @Input() userName: string = 'John Doe';

  // Propriété pour contrôler l'affichage du solde
  isBalanceHidden: boolean = false;

  toggleBalanceVisibility() {
    this.isBalanceHidden = !this.isBalanceHidden;
  }
}
