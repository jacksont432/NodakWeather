import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HomeDetailsComponent } from './home/home-details/home-details.component';
import { MatCardModule } from '@angular/material/card';
import { GraphComponent } from './home/graph/graph.component';
import { QueryComponent } from './home/query/query.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DropdownComponent } from './home/query/dropdown/dropdown.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule, HttpClientModule, MatCardModule, BrowserAnimationsModule, MatFormFieldModule, MatSelectModule ],
  declarations: [ AppComponent, HomeComponent, HomeDetailsComponent, GraphComponent, QueryComponent, DropdownComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }