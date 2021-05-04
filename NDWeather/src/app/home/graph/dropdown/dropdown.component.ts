import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.css']
})
export class DropdownComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }



  show: boolean = false;

  displayWeatherList: string [] = [
    "Date",
    "Precipitation",
    "Snowfall",
    "Temperature Average",
    "Temperature Max",
    "Temperature Min"
  ]

  displayStationList: string [] = [
    "Fargo",
    "Jamestown",
    "Grand Forks",
    "Williston",
    "Bismarck",
    "Minot",
    "Dickinson"
  ]

  station: string = "";
  weather: string = "";

  stationList: string[] = [
    "FARGO HECTOR INTERNATIONAL AIRPORT, ND US",
    "JAMESTOWN STATE HOSPITAL, ND US",
    "GRAND FORKS INTERNATIONAL AIRPORT, ND US",
    "WILLISTON EXPERIMENTAL FARM, ND US",
    "BISMARCK MUNICIPAL AIRPORT, ND US",
    "MINOT EXPERIMENTAL STATION, ND US",
    "DICKINSON RANCH HQ, ND US"
  ]

  weatherList: string[] = [
    "DATE",
    "PRCP",
    "SNOW",
    "TAVG",
    "TMAX",
    "TMIN"
  ]

  selectedStation: string = '';
  
  selectedWeather: string = '';


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
