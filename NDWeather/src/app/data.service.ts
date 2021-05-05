import { Injectable } from '@angular/core';
import { Weather } from './weather';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  WEATHER: Weather[] =[];

  constructor() { }

  getWeatherData() {
    
  }

}
