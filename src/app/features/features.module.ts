import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';

import { HomeComponent } from './pages/home/home.component';
import { WorkbenchComponent } from './pages/workbench/workbench.component';
import { MatrixComponent } from './components/matrix/matrix.component';
import { MatrixRowComponent } from './components/matrix-row/matrix-row.component';
import { ElementComponent } from './components/element/element.component';
import { RowOperationsComponent } from './components/row-operations/row-operations.component';

import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { LayoutModule } from '@angular/cdk/layout';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSnackBarModule } from '@angular/material/snack-bar';

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

const modules = [
  CommonModule,
  FormsModule,
  SharedModule,
  MatButtonModule,
  MatToolbarModule,
  MatIconModule,
  LayoutModule,
  MatSidenavModule,
  MatListModule,
  MatMenuModule,
  MatIconModule,
  MatCardModule,
  MatFormFieldModule,
  MatInputModule,
  MatSnackBarModule, 
  DragDropModule];

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
