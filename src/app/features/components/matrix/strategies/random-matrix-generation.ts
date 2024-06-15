import { Injectable } from '@angular/core';
import { MatrixGenerationStrategy } from './matrix-generation';
import { Matrix, MatrixRow, MatrixElement } from 'src/app/models/matrix.model';

@Injectable({
  providedIn: 'root'
})
export class RandomMatrixGenerationStrategy implements MatrixGenerationStrategy {
  generateMatrix(): Matrix {
    const rows: MatrixRow[] = [];
    for (let i = 0; i < 3; i++) {
      const elements: MatrixElement[] = [];
      for (let j = 0; j < 3; j++) {
        elements.push({ id: i * 3 + j, value: Math.floor(Math.random() * 10) });
      }
      rows.push({ elements });
    }
    return { rows };
  }
}
