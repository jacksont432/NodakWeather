import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  home: boolean = true;
  query: boolean = false;
  graph: boolean = false;
  

  homeClick(): void {
    this.home = !this.home;
    if(this.home == false && this.graph == false && this.query == false) {
      this.home = true;
    }
    else {
      this.query = false;
      this.graph = false;
    }
  }

  queryClick(): void {
    this.query = !this.query;
    if(this.query == false && this.graph == false && this.home == false) {
      this.query = true;
    }
    else {
      this.home = false;
      this.graph = false;
    }
  }

  graphClick(): void {
    this.graph = !this.graph;
    if(this.graph == false && this.query == false && this.home == false) {
      this.graph = true;
    }
    else {
      this.home = false;
      this.query = false;
    }
  }
  constructor() { }

  ngOnInit() {
  }

}
