import { Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Angular2SwapiService, Film, People } from 'angular2-swapi';
import { Observable } from 'rxjs';
import { first } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class StarWarsService {
  constructor(private router: Router, private swapiService: Angular2SwapiService) {}

  getCharacters(): Observable<People[]> {
    return this.swapiService.getPeople();
  }

  // This API always uses a slash at the end of URLs.
  getEntityId(url: string): string {
    return url.match(/.*\/([^/]+)\//)?.[1] as string;
  }

  getFilm(page: number): Observable<Film> {
    return this.swapiService.getFilms(page).pipe(first()) as Observable<Film>;
  }

  getFilms(): Observable<Film[]> {
    return this.swapiService.getFilms();
  }

  getPlanets(): Observable<any> {
    return this.swapiService.getPlanets();
  }

  goToEntity(url: string, route: ActivatedRoute): void {
    const entityId: string = this.getEntityId(url);
    this.router.navigate([entityId], { relativeTo: route }).then(console.log);
  }
}
