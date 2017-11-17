import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-number-to-weather',
  templateUrl: './number-to-weather.component.html',
  styleUrls: ['./number-to-weather.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class NumberToWeatherComponent implements OnInit {
weather:number=1;
  constructor() { }

  ngOnInit() {
  }

}
