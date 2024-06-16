import { Component, Input } from '@angular/core';
import { MatrixRow } from 'src/app/models/matrix.model';
import { MatrixService } from '../../matrix.service';
import { ScaleRow, multiply, divide } from 'src/app/models/row-operation.model';

@Component({
  selector: 'app-matrix-row',
  templateUrl: './matrix-row.component.html',
  styleUrls: ['./matrix-row.component.css']
})
export class MatrixRowComponent {
  @Input() row!: MatrixRow;
  @Input() rowIndex!: number;

  constructor(private matrixService: MatrixService) {}

  handleMultiply(event: { rowIndex: number, factor: number }) {
    const operation = new ScaleRow(multiply, event.factor);
    this.matrixService.applyRowOperation(event.rowIndex, operation);
    console.log('Multiply event:', event);
  }

  handleDivide(event: { rowIndex: number, factor: number }) {
    const operation = new ScaleRow(divide, event.factor);
    this.matrixService.applyRowOperation(event.rowIndex, operation);
    console.log('Divide event:', event);
  }
}
