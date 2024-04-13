// Importations nécessaires des modules HTTP d'Angular pour la gestion des requêtes.
import { HttpContext, HttpHeaders, HttpParams } from '@angular/common/http';

// Interface pour les options de requête HTTP personnalisées.
export interface Options {
  // Headers de la requête HTTP, pouvant être un objet HttpHeaders ou un objet littéral.
  headers?:
    | HttpHeaders
    | {
        [header: string]: string | string[];
      };
  // Mode d'observation de la réponse HTTP, fixé ici uniquement à 'body'.
  observe?: 'body';
  // Contexte HTTP optionnel pour la requête, permettant de passer des informations supplémentaires.
  context?: HttpContext;
  // Paramètres de la requête, peuvent être un objet HttpParams ou un objet littéral.
  params?:
    | HttpParams
    | {
        [param: string]:
          | string
          | number
          | boolean
          | ReadonlyArray<string | number | boolean>;
      };
  // Indique si la progression de la requête doit être rapportée (utile pour les chargements de fichiers).
  reportProgress?: boolean;
  // Type de réponse attendue, ici fixé à 'json' pour la simplicité des traitements.
  responseType?: 'json';
  // Si les requêtes doivent être effectuées avec les credentials tels que les cookies.
  withCredentials?: boolean;
  // Gestion du cache de transfert, peut être un booléen ou un objet spécifiant les en-têtes à inclure.
  transferCache?:
    | {
        includeHeaders?: string[];
      }
    | boolean;
}

// Interface représentant une collection d'animaux avec pagination.
export interface Animals {
  items: Animal[];  // Tableau d'objets Animal.
  total: number;    // Nombre total d'animaux.
  page: number;     // Numéro de la page actuelle.
  perPage: number;  // Nombre d'animaux par page.
  totalPages: number;  // Nombre total de pages.
}

// Interface définissant la structure d'un animal.
export interface Animal {
  id?: number;     // Identifiant de l'animal, optionnel.
  name: string;    // Nom de l'animal.
  species: string; // Espèce de l'animal.
  habitat: string; // Habitat naturel de l'animal.
  image: string;   // URL de l'image représentant l'animal.
}

// Interface pour les paramètres de pagination utilisés dans les requêtes.
export interface PaginationParams {
  [param: string]:
    | string
    | number
    | boolean
    | ReadonlyArray<string | number | boolean>;
  page: number;    // Numéro de la page à récupérer.
  perPage: number; // Nombre d'éléments par page.
}
