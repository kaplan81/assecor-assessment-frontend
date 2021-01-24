import { NgModule } from '@angular/core';
import { SharedModule } from '../_shared/shared.module';
import { CharacterComponent } from './character/character.component';
import { CharactersRoutingModule } from './characters-routing.module';
import { CharactersComponent } from './characters/characters.component';

@NgModule({
  imports: [SharedModule, CharactersRoutingModule],
  declarations: [CharactersComponent, CharacterComponent],
})
export class CharactersModule {}
