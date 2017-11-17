import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NumberToWeatherComponent } from './number-to-weather.component';

describe('NumberToWeatherComponent', () => {
  let component: NumberToWeatherComponent;
  let fixture: ComponentFixture<NumberToWeatherComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NumberToWeatherComponent ]
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
});
