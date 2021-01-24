import { NgModule } from '@angular/core';
import { CharacterComponent } from './character/character.component';
import { CharactersRoutingModule } from './characters-routing.module';
import { CharactersComponent } from './characters/characters.component';

@NgModule({
  imports: [CharactersRoutingModule],
  declarations: [CharactersComponent, CharacterComponent],
})
export class CharactersModule {}
