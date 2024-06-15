import { Component, Input } from '@angular/core';
import { MatrixRow } from 'src/app/models/matrix.model';

@Component({
  selector: 'app-matrix-row',
  templateUrl: './matrix-row.component.html',
  styleUrls: ['./matrix-row.component.css']
})
export class MatrixRowComponent {
  @Input() row?: MatrixRow
}
