import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-home-details',
  templateUrl: './home-details.component.html',
  styleUrls: ['./home-details.component.css']
})
export class HomeDetailsComponent implements OnInit {

  likes: number = 0;
  @Output()
  shares: EventEmitter<number> = new EventEmitter<number>();
  constructor() { }
  numShares: number = 1;

  ngOnInit() {
  }

  like() {
    this.likes++;
  }

  share() {
    this.shares.emit(++this.numShares);
  }

}