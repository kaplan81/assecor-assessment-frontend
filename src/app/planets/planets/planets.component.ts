import { Component } from '@angular/core';
import { Planet } from 'angular2-swapi';
import { Observable } from 'rxjs';
import { StarWarsService } from '../../star-wars.service';

@Component({
  selector: 'app-planets',
  templateUrl: './planets.component.html',
  styleUrls: ['./planets.component.scss'],
})
export class PlanetsComponent {
  planets$: Observable<Planet[]> = this.starWarsService.getPlanets();

  constructor(private starWarsService: StarWarsService) {}
}
