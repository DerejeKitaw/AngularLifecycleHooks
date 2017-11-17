import { NumberToWeatherPipe } from './number-to-weather.pipe';

describe('NumberToWeatherPipe', () => {
  it('create an instance', () => {
    const pipe = new NumberToWeatherPipe();
    expect(pipe).toBeTruthy();
  });
});
