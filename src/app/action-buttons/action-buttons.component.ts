import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-action-buttons',
  standalone: true,
  templateUrl: './action-buttons.component.html',
  styleUrls: ['./action-buttons.component.css'],
})
export class ActionButtonsComponent {
  // Événements émis lors du clic sur chaque bouton
  @Output() withdraw = new EventEmitter<void>();
  @Output() transfer = new EventEmitter<void>();
  @Output() deposit = new EventEmitter<void>();

  onWithdraw() {
    this.withdraw.emit();
  }

  onTransfer() {
    this.transfer.emit();
  }

  onDeposit() {
    this.deposit.emit();
  }
}
