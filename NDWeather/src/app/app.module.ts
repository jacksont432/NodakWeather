import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import {MatTableModule} from '@angular/material/table';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HomeDetailsComponent } from './home/home-details/home-details.component';
import { MatCardModule } from '@angular/material/card';
import { GraphComponent } from './home/graph/graph.component';
import { QueryComponent } from './home/query/query.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DropdownComponent } from './home/query/dropdown/dropdown.component';
import { ChartsModule } from 'ng2-charts';
import { ScrollToTopComponent } from './scroll-to-top/scroll-to-top.component';
import { DropdownGraphComponent } from './home/graph/dropdown-graph/dropdown-graph.component';


@NgModule({
  imports:      [ BrowserModule, FormsModule, MatCardModule, BrowserAnimationsModule, MatFormFieldModule, MatSelectModule, MatTableModule , ChartsModule  ],
  declarations: [ AppComponent, HomeComponent, HomeDetailsComponent, GraphComponent, QueryComponent, DropdownComponent, ScrollToTopComponent, DropdownGraphComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }