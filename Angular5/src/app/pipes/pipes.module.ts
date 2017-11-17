import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NumberToWeatherComponent } from './number-to-weather/number-to-weather.component';
import { PipesRoutingModule } from './pipes.routing.module';

@NgModule({
  imports: [
    CommonModule,
    PipesRoutingModule
  ],
  declarations: [NumberToWeatherComponent]
})
export class PipesModule { }
