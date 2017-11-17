import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NumberToWeatherComponent } from './number-to-weather/number-to-weather.component';
import { ComponentsRoutingModule } from './components.routing.module';
import { NumberToWeatherPipe } from '../pipes/number-to-weather.pipe';

@NgModule({
  imports: [
    CommonModule,
    ComponentsRoutingModule
  ],
  declarations: [NumberToWeatherComponent,
    NumberToWeatherPipe
  ]
})
export class ComponentsModule { }
