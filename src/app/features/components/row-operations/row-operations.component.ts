import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-row-operations',
  templateUrl: './row-operations.component.html',
  styleUrls: ['./row-operations.component.css'],
})
export class RowOperationsComponent {
  @Input() rowIndex!: number;
  @Output() multiply = new EventEmitter<{ rowIndex: number; factor: number }>();
  @Output() divide = new EventEmitter<{ rowIndex: number; factor: number }>();

  scaleFactor: number | null = null;

  onMultiply() {
    const factor = this.scaleFactor !== null ? this.scaleFactor : 1;
    this.multiply.emit({ rowIndex: this.rowIndex, factor: factor });
  }

  onDivide() {
    const factor = this.scaleFactor !== null ? this.scaleFactor : 1;
    this.divide.emit({ rowIndex: this.rowIndex, factor: factor });
  }
}
