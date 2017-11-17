import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NumberToWeatherComponent } from './number-to-weather.component';
import { NumberToWeatherPipe } from '../../pipes/number-to-weather.pipe';

describe('NumberToWeatherComponent', () => {
  let component: NumberToWeatherComponent;
  let fixture: ComponentFixture<NumberToWeatherComponent>;
  const pipe = new NumberToWeatherPipe();
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ 
        NumberToWeatherComponent,
        NumberToWeatherPipe ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NumberToWeatherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


  it('It should map 0 to Snowey', () => {
    expect(pipe.transform(0)).toBe('Snowey');
  });

  it('It should map 1 to cloudy', () => {
    expect(pipe.transform(1)).toBe('cloudy');
  });

  it('It should map numbers or words other than 0 or 1 to their default', () => {
    let textToTransform = 'Test pipe';
    expect(pipe.transform(textToTransform)).toBe(textToTransform);
  });

  // it('should fail', () => {
  //   expect(2).toBe(3);
  // });


});
