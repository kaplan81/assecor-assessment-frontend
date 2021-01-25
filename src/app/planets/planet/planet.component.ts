import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Planet } from 'angular2-swapi';
import { Observable } from 'rxjs';
import { StarWarsService } from '../../star-wars.service';

@Component({
  selector: 'app-planet',
  templateUrl: './planet.component.html',
  styleUrls: ['./planet.component.scss'],
})
export class PlanetComponent {
  planet$: Observable<Planet> = this.starWarsService.getPlanet(
    +(this.route.snapshot.paramMap.get('planetId') as string),
  );

  constructor(private route: ActivatedRoute, private starWarsService: StarWarsService) {}
}
