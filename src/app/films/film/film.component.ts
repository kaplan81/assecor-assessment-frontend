import { Component } from '@angular/core';
import { Film } from 'angular2-swapi';
import { Observable } from 'rxjs';
import { StarWarsService } from '../../star-wars.service';

@Component({
  selector: 'app-film',
  templateUrl: './film.component.html',
  styleUrls: ['./film.component.scss'],
})
export class FilmComponent {
  film$: Observable<Film> = this.starWarsService.getFilm(1);

  constructor(private starWarsService: StarWarsService) {}
}
