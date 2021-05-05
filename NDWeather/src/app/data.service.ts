import { Injectable } from '@angular/core';
import { Weather, Data } from './weather';
import { fargoData, bismarckData, grandForksData, willistonData, minotData, jamestownData, dickinsonData } from './weatherData';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  data: Weather[] = []

  output: Data[] = [];

  dataInstance: Data | undefined;

  constructor() { }

  getStationData(station: string) {
    if(station == "Fargo") {
      this.data = fargoData;
    }
    else if(station == "Jamestown") {
      this.data = jamestownData;
    }
    else if(station == "Grand Forks") {
      this.data = grandForksData;
    }
    else if(station == "Williston") {
      this.data = willistonData;
    }
    else if(station == "Bismarck") {
      this.data = bismarckData;
    }
    else if(station == "Minot") {
      this.data = minotData;
    }
    else if(station == "Dickinson") {
      this.data = dickinsonData;
    }
  }

  trimData(weatherType: string) {
    for(var i = 0; i < this.data.length; i++) {
       var temp = this.data[i];
       if(weatherType == 'PRCP') {
         this.dataInstance = { name: temp.DATE, value: temp.PRCP };
         this.output.push(this.dataInstance);
       }
       else if(weatherType == 'SNOW') {
        this.dataInstance = { name: temp.DATE, value: temp.SNOW };
        this.output.push(this.dataInstance);
      }
      else if(weatherType == 'TAVG') {
        this.dataInstance = { name: temp.DATE, value: temp.TAVG };
        this.output.push(this.dataInstance);
      }
      else if(weatherType == 'TMAX') {
        this.dataInstance = { name: temp.DATE, value: temp.TMAX };
        this.output.push(this.dataInstance);
      }
      else if(weatherType == 'TMIN') {
        this.dataInstance = { name: temp.DATE, value: temp.TMIN };
        this.output.push(this.dataInstance);
      }
    }
  }

  getData(station: string, weatherType: string) {
    this.output = [];
    this.getStationData(station);
    this.trimData(weatherType);
    return this.output;
  }

}
