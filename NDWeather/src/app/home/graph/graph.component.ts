import { Component, OnInit } from '@angular/core';
import {ChartsModule} from 'ng2-charts';
import { Data } from '../../weather';
import { DataService } from '../../data.service';

interface chartData {
  data: number [];
  label: string
}

@Component({
  selector: 'app-graph',
  templateUrl: './graph.component.html',
  styleUrls: ['./graph.component.css']
})
export class GraphComponent implements OnInit {

  plotData: chartData [] = [];

  chartLabels: string [] = [];

  chartOptions = {
    responsive: true
  };

  constructor(private service: DataService) { }

  ngOnInit(): void {}

  choice: string [] = [];

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
    this.load();
  }

  load() {
    this.chartLabels = [];
    this.plotData[0].label = this.station;
    for(var i = 0; i < this.dataList.length; i++) {
      var num = this.dataList[i].value;
      var time = this.dataList[i].name;
      if(num == null) {
        continue;
      }
      else {
        this.plotData[0].data[i] = num;
      }
      this.chartLabels.push(time);
    }
  }

 

}
