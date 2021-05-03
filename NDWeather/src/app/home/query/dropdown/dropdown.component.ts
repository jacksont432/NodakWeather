import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';


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

  county: string = "";
  weather: string = "";

  countiesList: string[] = [
    "FARGO HECTOR INTERNATIONAL AIRPORT, ND US",
    "JAMESTOWN STATE HOSPITAL, ND US",
    "GRAND FORKS INTERNATIONAL AIRPORT, ND US"
  ]

  weatherList: string[] = [
    "DATE",
    "PRCP",
    "SNOW",
    "TAVG",
    "TMAX",
    "TMIN"
  ]

  selectedCounty: string = '';
  
  selectedWeather: string = '';


  select() {
    this.selectedCounty = this.county;
    this.selectedWeather = this.weather;
  }

  submit() {
    if(this.selectedCounty != '' && this.selectedWeather != '') {
      this.show = true;
    }
    else {
      this.show = false;
    }
  }

}
