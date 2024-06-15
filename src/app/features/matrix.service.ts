import { Inject, Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Matrix, MatrixRow, MatrixElement } from '../models/matrix.model';
import { MatrixGenerationStrategy } from './components/matrix/strategies/matrix-generation';

@Injectable({
  providedIn: 'root',
})
export class MatrixService {
  private matrixSubject: BehaviorSubject<Matrix>;
  matrix$: Observable<Matrix>;

  constructor(
    @Inject('MatrixGenerationStrategy')
    private generationStrategy: MatrixGenerationStrategy
  ) {
    const placeholderMatrix = this.generatePlaceholderMatrix();
    this.matrixSubject = new BehaviorSubject<Matrix>(placeholderMatrix);
    this.matrix$ = this.matrixSubject.asObservable();
    this.generateNewMatrix();
  }

  private generatePlaceholderMatrix(): Matrix {
    const rows: MatrixRow[] = [];
    for (let i = 0; i < 3; i++) {
      const elements: MatrixElement[] = [];
      for (let j = 0; j < 3; j++) {
        elements.push({ id: i * 3 + j, value: null });
      }
      rows.push({ elements });
    }
    return { rows };
  }

  getMatrix(): Matrix {
    console.log('Current matrix state:', this.matrixSubject.value);
    return this.matrixSubject.value;
  }


  updateMatrix(newMatrix: Matrix): void {
    console.log('Updating matrix state:', newMatrix);
    this.matrixSubject.next(newMatrix);
  }

  generateNewMatrix(): void {
    const newMatrix = this.generationStrategy.generateMatrix();
    console.log('Generated new matrix:', newMatrix);
    this.matrixSubject.next(newMatrix);
  }
}
