import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { HttpClientModule } from "@angular/common/http";
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HomeDetailsComponent } from './home/home-details/home-details.component';
import { MatCardModule } from '@angular/material/card';
import { GraphComponent } from './home/graph/graph.component';
import { QueryComponent } from './home/query/query.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DropdownComponent } from './home/query/dropdown/dropdown.component';

var firebaseConfig = {
  apiKey: "AIzaSyBAzG5_cmBupxyYPpjhLHfygoWgKtY1l5g",
  authDomain: "nodakweather.firebaseapp.com",
  databaseURL: "https://nodakweather-default-rtdb.firebaseio.com",
  projectId: "nodakweather",
  storageBucket: "nodakweather.appspot.com",
  messagingSenderId: "647807302898",
  appId: "1:647807302898:web:5a60b71b800d5bef5de46b",
  measurementId: "G-F8QSZ6PHW2"
};

@NgModule({
  imports:      [ BrowserModule, FormsModule, HttpClientModule, MatCardModule, BrowserAnimationsModule, MatFormFieldModule, MatSelectModule,AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule, // firestore
    AngularFireAuthModule, // auth
    AngularFireStorageModule // storage
   ],
  declarations: [ AppComponent, HomeComponent, HomeDetailsComponent, GraphComponent, QueryComponent, DropdownComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }