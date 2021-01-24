import { NgModule } from '@angular/core';
import { FilmComponent } from './film/film.component';
import { FilmsRoutingModule } from './films-routing.module';
import { FilmsComponent } from './films/films.component';

@NgModule({
  imports: [FilmsRoutingModule],
  declarations: [FilmsComponent, FilmComponent],
})
export class FilmsModule {}
