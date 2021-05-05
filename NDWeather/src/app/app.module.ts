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


@NgModule({
<<<<<<< HEAD
  imports:      [ BrowserModule, FormsModule, MatCardModule, BrowserAnimationsModule, MatFormFieldModule, MatSelectModule, ChartsModule ],
=======
  imports:      [ BrowserModule, FormsModule, MatCardModule, BrowserAnimationsModule, MatFormFieldModule, MatSelectModule, MatTableModule   ],
>>>>>>> e08de97cb91a7e1d1e258f0a56d1f5b3a435ee8f
  declarations: [ AppComponent, HomeComponent, HomeDetailsComponent, GraphComponent, QueryComponent, DropdownComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }