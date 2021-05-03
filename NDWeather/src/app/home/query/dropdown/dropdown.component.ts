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

  county: string = "";

  countiesList: string[] = [
    "Cass County",
    "Burleigh County",
    "Grand Forks County",
    "Ward County",
    "Williams County",
    "Stark County"
  ]

}
