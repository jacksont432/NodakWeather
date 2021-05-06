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

    this.chartData = this.service.getData(this.station, this.weather) as any ;	 // FILL THE CHART ARRAY WITH DATA.
  
  }

}
