import { Component, OnInit } from '@angular/core';
import { MatrixService } from '../../matrix.service';
import { Matrix, MatrixRow } from 'src/app/models/matrix.model';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-matrix',
  templateUrl: './matrix.component.html',
  styleUrls: ['./matrix.component.css'],
})
export class MatrixComponent implements OnInit {
  matrix?: Matrix;

  constructor(private matrixService: MatrixService) {}

  ngOnInit(): void {
    this.matrixService.matrix$.subscribe((matrix) => {
      this.matrix = matrix;
    });
  }

  generateNewMatrix(): void {
    this.matrixService.generateNewMatrix();
  }

  drop(event: CdkDragDrop<MatrixRow[]>): void {
    if (this.matrix) {
      moveItemInArray(
        this.matrix.rows,
        event.previousIndex,
        event.currentIndex
      );
      this.matrixService.updateMatrix(this.matrix);
    }
  }
}
