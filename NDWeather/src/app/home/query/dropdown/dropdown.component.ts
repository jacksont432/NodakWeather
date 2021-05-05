import { Component, OnInit } from '@angular/core';
import { DataService } from '../../../data.service';
import { Weather } from '../../../weather';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.css']
})
export class DropdownComponent implements OnInit {

  constructor(private service: DataService) { }

  ngOnInit() {
  }

  dataList: Weather[] = [];
  
  // toggle for the data to display
  show: boolean = false;
  // the chosen station and weather type
  station: string = "";
  weather: string = "";
  // the corresponding chosen station and weather to query
  selectedStation: string = '';  
  selectedWeather: string = '';
  // the list of weather to display
  displayWeatherList: string [] = [
    "Precipitation",
    "Snowfall",
    "Temperature Average",
    "Temperature Max",
    "Temperature Min"
  ]
  // the corresponding weather options in the json file
  weatherList: string[] = [
    "PRCP",
    "SNOW",
    "TAVG",
    "TMAX",
    "TMIN"
  ]
  // the list of stations to display
  displayStationList: string [] = [
    "Fargo",
    "Jamestown",
    "Grand Forks",
    "Williston",
    "Bismarck",
    "Minot",
    "Dickinson"
  ]
  // the list of stations in the json file
  stationList: string[] = [
    "FARGO HECTOR INTERNATIONAL AIRPORT, ND US",
    "JAMESTOWN STATE HOSPITAL, ND US",
    "GRAND FORKS INTERNATIONAL AIRPORT, ND US",
    "WILLISTON EXPERIMENTAL FARM, ND US",
    "BISMARCK MUNICIPAL AIRPORT, ND US",
    "MINOT EXPERIMENTAL STATION, ND US",
    "DICKINSON RANCH HQ, ND US"
  ]

  select() {
    this.selectedStation = this.station;
    this.selectedWeather = this.weather;
  }

  submit() {
    if(this.selectedStation != '' && this.selectedWeather != '') {
      this.show = true;
    }
    else {
      this.show = false;
    }
  }

}
