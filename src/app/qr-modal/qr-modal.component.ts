import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-qr-modal',
  template: `
    <div class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50" (click)="closeModal()">
      <div class="bg-white rounded-lg p-6 shadow-lg max-w-sm w-full" (click)="$event.stopPropagation()">
        <h3 class="text-xl font-bold text-center mb-4">Code QR</h3>
        <img [src]="qrImageUrl" alt="QR Code" class="w-full h-auto rounded-lg shadow-md mb-4">
        <button class="btn btn-primary w-full" (click)="closeModal()">Fermer</button>
      </div>
    </div>
  `,
  styles: [`
    .btn-primary {
      background-color: #1d4ed8;
      color: white;
      padding: 8px 16px;
      border-radius: 8px;
      font-weight: bold;
      text-transform: uppercase;
      transition: background-color 0.3s ease;
    }
    .btn-primary:hover {
      background-color: #2563eb;
    }
  `]
})
export class QrModalComponent {
  @Input() qrImageUrl: string = '';
  @Output() close = new EventEmitter<void>();

  closeModal() {
    this.close.emit();
  }
}
