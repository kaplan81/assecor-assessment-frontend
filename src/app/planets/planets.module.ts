import { NgModule } from '@angular/core';
import { PlanetComponent } from './planet/planet.component';
import { PlanetsRoutingModule } from './planets-routing.module';
import { PlanetsComponent } from './planets/planets.component';

@NgModule({
  imports: [PlanetsRoutingModule],
  declarations: [PlanetsComponent, PlanetComponent],
})
export class PlanetsModule {}
