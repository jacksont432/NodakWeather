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

  Submit() {
    this.choice[0] = this.weather;
    this.choice[1] = this.station;
    this.emitter.emit(this.choice);
  }

}
