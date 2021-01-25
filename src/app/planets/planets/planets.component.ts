import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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

  constructor(private route: ActivatedRoute, private starWarsService: StarWarsService) {}

  goToPlanet(url: string): void {
    this.starWarsService.goToEntity(url, this.route);
  }
}
