import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Observable } from 'rxjs';
import { PaginationParams, Animals } from '../../types';

@Injectable({
  providedIn: 'root',
})
export class AnimalsService {
  // Injection du ApiService (content dans les requetes http) dans le constructeur de AnimalsService.
  constructor(private apiService: ApiService) {}

  // Définition d'une méthode getAnimals pour récupérer les données d'animaux.
  getAnimals = (
    // Cette méthode prend une URL et un objet PaginationParams comme paramètres.
    url: string,
    params: PaginationParams
  ): Observable<Animals> => {
    // La méthode retourne un Observable de type Animals, conforme à l'interface définie.
    
    // Utilisation de ApiService pour effectuer une requête GET.
    // L'URL et les paramètres de pagination sont passés dans l'appel.
    // Le type de réponse est spécifié comme 'json', ce qui est commun pour des API REST.
    // Cela permet à l'appelant de s'abonner à la réponse et de réagir une fois que les données sont disponibles ou en cas d'erreur.
    return this.apiService.get(url, {
      params,
      responseType: 'json',
    });
  };
}
