import { Component, Input, input } from '@angular/core';
import { Animal } from '../../../types';

@Component({
  selector: 'app-animal',
  standalone: true,
  imports: [],
  templateUrl: './animal.component.html',
  styleUrl: './animal.component.scss'
})
export class AnimalComponent {
  // "!" signifie que la propriété ne sera pas nulle
  @Input() animal!: Animal;
}
