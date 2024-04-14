import { Component } from '@angular/core';
import { AnimalsService } from '../services/animals.service';
import { Animal, Animals } from '../../types';
import { AnimalComponent } from '../components/animal/animal.component';
import { CommonModule } from '@angular/common';
import { PaginatorModule } from 'primeng/paginator';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [AnimalComponent, CommonModule, PaginatorModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  constructor(private AnimalsService: AnimalsService) {}

  animals: Animal[] = [];
  totalRecords: number = 0;
  rows = 5;

  onPageChange(event: any) {
    this.fetchAnimals(event.page, event.rows);
  }

  fetchAnimals(page: number, perPage: number) {
    this.AnimalsService.getAnimals('http://localhost:3000/animals', {
      page,
      perPage,
    }).subscribe((animals: Animals) => {
      this.animals = animals.items;
      this.totalRecords = animals.total;
    });
  }

  ngOnInit() {
    this.fetchAnimals(1, this.rows);
  }
}
