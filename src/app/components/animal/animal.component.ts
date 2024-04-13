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
  @Input() animal!: Animal;
}
