import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { People } from 'angular2-swapi';
import { Observable } from 'rxjs';
import { StarWarsService } from '../../star-wars.service';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.scss'],
})
export class CharacterComponent {
  character$: Observable<People> = this.starWarsService.getCharacter(
    +(this.route.snapshot.paramMap.get('characterId') as string),
  );

  constructor(private route: ActivatedRoute, private starWarsService: StarWarsService) {}
}
