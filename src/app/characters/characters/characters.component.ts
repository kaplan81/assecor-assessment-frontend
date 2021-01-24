import { Component } from '@angular/core';
import { People } from 'angular2-swapi';
import { Observable } from 'rxjs';
import { StarWarsService } from '../../star-wars.service';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.scss'],
})
export class CharactersComponent {
  characters$: Observable<People[]> = this.starWarsService.getCharacters();

  constructor(private starWarsService: StarWarsService) {}
}
