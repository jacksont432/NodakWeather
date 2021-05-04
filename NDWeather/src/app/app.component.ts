import { Component } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'NDWeather';

  private data:any = []
  constructor(private http: HttpClient) {}

 getData(){
   const url ='../assets/data.json'
   this.http.get(url).subscribe((res)=>{
     this.data = res
     console.log(this.data)
   })
 }

}
