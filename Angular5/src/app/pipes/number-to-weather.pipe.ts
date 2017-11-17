import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'numberToWeather'
})
export class NumberToWeatherPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return value;
  }

}
