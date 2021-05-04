import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { pipe } from "rxjs";
import { map } from "rxjs/operators";
import { Weather } from './weather';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  blah: string = 'blah';
  WEATHER: Weather[] =[];

  constructor(private http: HttpClient) { }

  getWeatherData() {
    return this.http
    .get<Weather[]>(
      "https://nodakweather-default-rtdb.firebaseio.com/WEATHER"
    )
    .pipe(
      map(data => {
        let weatherArray: Weather[] = [];
        for(let key in data) weatherArray.push(data[key]);
        return weatherArray;
      })
    );
  }

}
