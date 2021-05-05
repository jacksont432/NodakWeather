import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { DataService } from '../../../data.service';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.css']
})
export class DropdownComponent implements OnInit {

  constructor(private service: DataService) { }

  ngOnInit() {
  }

  // the chosen station and weather type
  station: string = "";
  weather: string = "";
  location: string = "";

  choice: string [] = [];
  // the corresponding chosen station and weather to query
  @Output()
  emitter: EventEmitter<string [] > = new EventEmitter<string []>();
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

  findLocation() {
    if(this.weather == "PRCP") {
      this.location = '1';
    }
    else if(this.weather == "SNOW") {
      this.location = '2';
    }
    else if(this.weather == "TAVG") {
      this.location = '3';
    }
    else if(this.weather == "TMAX") {
      this.location = '4';
    }
    else if(this.weather == "TMIN") {
      this.location = '5';
    }
  }

  Submit() {
    this.findLocation();
    this.choice[0] = this.weather;
    this.choice[1] = this.station;
    this.choice[2] = this.location;
    this.emitter.emit(this.choice);
  }

}
