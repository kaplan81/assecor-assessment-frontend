import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CharacterComponent } from './character/character.component';
import { CharactersComponent } from './characters/characters.component';

const routes: Routes = [
  {
    path: '',
    component: CharactersComponent,
  },
  {
    path: ':characterId',
    component: CharacterComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CharactersRoutingModule {}
