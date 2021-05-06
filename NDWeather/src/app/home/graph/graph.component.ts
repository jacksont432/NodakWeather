import { Component, OnInit } from '@angular/core';
import {ChartsModule} from 'ng2-charts';
import { Data } from '../../weather';
import { DataService } from '../../data.service';

@Component({
  selector: 'app-graph',
  templateUrl: './graph.component.html',
  styleUrls: ['./graph.component.css']
})
export class GraphComponent implements OnInit {

  chartData = [
    {
      data: [330, 600, 260, 700],
      label: 'Account A'
    }
  ];

  chartLabels = [
    'January',
    'February',
    'March',
    'April'
  ];

  chartOptions = {
    responsive: true
  };

  constructor(private service: DataService) { }

  ngOnInit(): void {}

  choice: string [] = [];

  dataList: Data[] = [];

  station: string = '____';
  weather: string = '____';
  location: number = -1;
  display: string = '____';

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
