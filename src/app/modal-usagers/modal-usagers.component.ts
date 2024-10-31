import { Component, Input, Output, EventEmitter, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-modal-usagers',
  imports: [CommonModule],
  templateUrl: './modal-usagers.component.html',
  styleUrls: ['./modal-usagers.component.css'],
  standalone: true,
})
export class ModalUsagersComponent {
  @Input() showModal: boolean = false;
  @Input() usagers: Array<{ id: number; nom: string; selected: boolean }> = [];
  @Output() close = new EventEmitter<void>();
  @Output() confirmSelection = new EventEmitter<number[]>();

  selectedUsagers = signal(new Set<number>());

  toggleSelection(id: number) {
    this.selectedUsagers.update((currentSet) => {
      const newSet = new Set(currentSet);

      if (newSet.has(id)) {
        newSet.delete(id);
      } else {
        newSet.add(id);
      }

      return newSet;
    });
  }

  onConfirm() {
    this.confirmSelection.emit(Array.from(this.selectedUsagers()));
    this.close.emit();
  }
}
