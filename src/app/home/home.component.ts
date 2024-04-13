import { Component } from '@angular/core';
import { AnimalsService } from '../services/animals.service';
import { Animal, Animals } from '../../types';
import { AnimalComponent } from '../components/animal/animal.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [AnimalComponent, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  constructor(private AnimalsService: AnimalsService) {}

  animals: Animal[] = [];

  ngOnInit() {
    this.AnimalsService.getAnimals('http://localhost:3000/animals', {
      page: 0,
      perPage: 5,
    }).subscribe((animals: Animals) => {
      this.animals = animals.items;
    });
  }
}
