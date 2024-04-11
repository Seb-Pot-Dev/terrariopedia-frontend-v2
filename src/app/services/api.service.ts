import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Options, Animals } from '../../types';

/* 
  Le fichier api.service.ts définit un service Angular, ApiService, qui encapsule les opérations HTTP de base (GET, POST, PUT, DELETE) en utilisant le HttpClient d'Angular.
  Il simplifie les interactions avec des APIs web en fournissant une couche d'abstraction qui encapsule HttpClient et ses fonctionnalités 
  permettant de gérer les requêtes HTTP et les réponses de manière plus simple et cohérente.
 */

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private httpClient: HttpClient) {}
  /* 
    Le service utilise HttpClient pour faire des requêtes HTTP. 
    HttpClient est un service Angular qui offre une API simplifiée pour les requêtes HTTP et intègre des fonctionnalités telles que l'observance des réponses,
    la gestion des erreurs, et la conversion automatique des corps de requête et de réponse en JSON. 
  */

  // Méthode générique pour effectuer une requête HTTP GET.
  // <T> : Type générique qui sera utilisé pour typé la réponse de la requête.
  // url : L'URL de l'API à laquelle la requête doit être envoyée.
  // options : Paramètres optionnels pour la requête, tels que les en-têtes HTTP et les paramètres de requête.
  get<T>(url: string, options: Options): Observable<T> {
    // Appel de la méthode get de HttpClient avec le type générique T, l'URL et les options.
    // La méthode retourne un Observable de type T, permettant la souscription aux données de réponse.
    return this.httpClient.get<T>(url, options) as Observable<T>;
  }

  // Méthode générique pour effectuer une requête HTTP POST.
  // <T> : Type générique pour la réponse attendue.
  // url : L'URL de l'API cible.
  // body : Corps de la requête, typiquement les données à envoyer pour la création ou mise à jour.
  // options : Paramètres optionnels (headers, params).
  post<T>(url: string, body: Animals, options: Options): Observable<T> {
    // Utilisation de HttpClient pour envoyer une requête POST avec des données (body) et des options.
    // La réponse est typée comme Observable<T>.
    return this.httpClient.post<T>(url, body, options) as Observable<T>;
  }

  // Méthode générique pour effectuer une requête HTTP PUT.
  // Utilisée pour mettre à jour des ressources sur le serveur.
  // <T>, url, body et options suivent la même logique que pour POST.
  put<T>(url: string, body: Animals, options: Options): Observable<T> {
    // Envoie d'une requête PUT pour mettre à jour des données sur le serveur.
    // La réponse est capturée comme un Observable de type T.
    return this.httpClient.put<T>(url, body, options) as Observable<T>;
  }

  // Méthode pour effectuer une requête HTTP DELETE.
  // <T> : Type générique pour la réponse.
  // url : URL de la ressource à supprimer.
  // options : Paramètres optionnels pour la requête.
  delete<T>(url: string, options: Options): Observable<T> {
    // Envoie d'une requête DELETE à l'URL spécifiée avec les options fournies.
    // La méthode renvoie un Observable de type T, permettant la gestion asynchrone de la réponse.
    return this.httpClient.delete<T>(url, options) as Observable<T>;
  }
}
