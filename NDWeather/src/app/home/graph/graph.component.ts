import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
import {ChartsModule} from 'ng2-charts';
=======
import { Data } from '../../weather';
import { DataService } from '../../data.service';
>>>>>>> e08de97cb91a7e1d1e258f0a56d1f5b3a435ee8f

@Component({
  selector: 'app-graph',
  templateUrl: './graph.component.html',
  styleUrls: ['./graph.component.css']
})
export class GraphComponent implements OnInit {

<<<<<<< HEAD
  chartData = [
    {
      data: [330, 600, 260, 700],
      label: 'Account A'
    },
    {
      data: [120, 455, 100, 340],
      label: 'Account B'
    },
    {
      data: [45, 67, 800, 500],
      label: 'Account C'
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

  constructor() { }
=======
  constructor(private service: DataService) { }
>>>>>>> e08de97cb91a7e1d1e258f0a56d1f5b3a435ee8f

  ngOnInit(): void {
  }

  dataList: Data[] = [];

  station: string = '';
  weather: string = '';
  location: number = -1;
  display: string = '';

  temp: string[] = [];

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


  select() {
    this.temp = this.service.getInput();
    this.weather = this.temp[0];
    this.station = this.temp[1];
    this.location = parseInt(this.temp[2]);
    this.submit();
    this.displayOption();
  }


  submit() {
    this.dataList = this.service.getData(this.station, this.weather);
  }

}
