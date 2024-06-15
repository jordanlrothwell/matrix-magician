import { Component, Input } from '@angular/core';
import { MatrixElement } from 'src/app/models/matrix.model';

@Component({
  selector: 'app-element',
  templateUrl: './element.component.html',
  styleUrls: ['./element.component.css']
})
export class ElementComponent {
  @Input() element?: MatrixElement;
}
