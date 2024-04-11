import { Component } from '@angular/core';
import { AnimalsService } from '../services/animals.service';
import { Animals } from '../../types';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  constructor(private AnimalsService: AnimalsService) {}

  ngOnInit() {
    this.AnimalsService.getAnimals('http://localhost:3000/animals', {
      page: 0,
      perPage: 5,
    }).subscribe((animals: Animals) => {
      console.log(animals.items);
    });
  }
}
