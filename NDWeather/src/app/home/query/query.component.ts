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

  select(vals: string[]) {
    this.weather = vals[0];
    this.station = vals[1];
    this.submit();
  }


  submit() {
    this.dataList = this.service.getData(this.station, this.weather);
  }

}
