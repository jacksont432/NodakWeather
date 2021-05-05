import { Component, OnInit } from '@angular/core';
import { Data } from '../../weather';
import { DataService } from '../../data.service';

@Component({
  selector: 'app-query',
  templateUrl: './query.component.html',
  styleUrls: ['./query.component.css']
})
export class QueryComponent implements OnInit {

  constructor(private service: DataService) { }

  ngOnInit(): void {
  }

  dataList: Data[] = [];

  station: string = '';
  weather: string = '';
  location: number = -1;
  display: string = '';

  weatherTypes: string [] = [
    'Precipitation',
    'Snowfall',
    'Average Temperature',
    'Maximum Temperature',
    'Minimum Temperature'
  ];

  displayOption() {
    this.display = this.weatherTypes[this.location - 1];
  }


  select(vals: string[]) {
    this.weather = vals[0];
    this.station = vals[1];
    this.location = parseInt(vals[2]);
    this.submit();
    this.displayOption();
  }


  submit() {
    this.dataList = this.service.getData(this.station, this.weather);
  }

}
