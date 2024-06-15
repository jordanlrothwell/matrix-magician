import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './pages/home/home.component';
import { WorkbenchComponent } from './pages/workbench/workbench.component';
import { MatrixComponent } from './components/matrix/matrix.component';
import { MatrixRowComponent } from './components/matrix-row/matrix-row.component';
import { ElementComponent } from './components/element/element.component';
import { RowOperationsComponent } from './components/row-operations/row-operations.component';

import { MatrixService } from './matrix.service';
import { RandomMatrixGenerationStrategy } from './components/matrix/strategies/random-matrix-generation';

import { DragDropModule } from '@angular/cdk/drag-drop';

const components = [
  HomeComponent,
  WorkbenchComponent,
  MatrixComponent,
  MatrixRowComponent,
  ElementComponent,
  RowOperationsComponent,
];

const modules = [CommonModule, DragDropModule];

@NgModule({
  declarations: [...components],
  imports: [...modules],
  exports: [...components, ...modules],
  providers: [
    MatrixService,
    {
      provide: 'MatrixGenerationStrategy',
      useClass: RandomMatrixGenerationStrategy,
    },
  ],
})
export class FeaturesModule {}
