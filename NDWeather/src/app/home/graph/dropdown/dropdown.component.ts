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

  county: string = "";
  weather: string = "";

  countiesList: string[] = [
    "Cass County",
    "Burleigh County",
    "Grand Forks County",
    "Ward County",
    "Williams County",
    "Stark County"
  ]

  weatherList: string[] = [
    "Temperature",
    "Rainfall"
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
