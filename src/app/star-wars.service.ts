import { Injectable } from '@angular/core';
import { Angular2SwapiService, Film, People } from 'angular2-swapi';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class StarWarsService {
  constructor(private swapiService: Angular2SwapiService) {}

  getCharacters(): Observable<People[]> {
    return this.swapiService.getPeople();
  }

  getFilms(): Observable<Film[]> {
    return this.swapiService.getFilms();
  }

  getPlanets(): Observable<any> {
    return this.swapiService.getPlanets();
  }
}
