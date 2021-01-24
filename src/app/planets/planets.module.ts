import { NgModule } from '@angular/core';
import { SharedModule } from '../_shared/shared.module';
import { PlanetComponent } from './planet/planet.component';
import { PlanetsRoutingModule } from './planets-routing.module';
import { PlanetsComponent } from './planets/planets.component';

@NgModule({
  imports: [SharedModule, PlanetsRoutingModule],
  declarations: [PlanetsComponent, PlanetComponent],
})
export class PlanetsModule {}
