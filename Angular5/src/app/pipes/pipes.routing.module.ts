import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { PageNotFoundComponent } from '../page-not-found/page-not-found.component';
import { NumberToWeatherComponent } from './number-to-weather/number-to-weather.component';

const routes: Routes = [
  { path: 'numberToWeather', component: NumberToWeatherComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes),
    HttpClientModule, //add this module for angular4
  ],
  exports: [RouterModule]
})
export class PipesRoutingModule { }
