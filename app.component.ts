import { Component } from '@angular/core';
import {HttpModule} from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {WeatherComponent} from 'C:/Users/Pradnya Borkar/Desktop/weather-app/src/app/weather/weather.component';
import {AboutComponent} from 'C:/Users/Pradnya Borkar/Desktop/weather-app/src/app/about/about.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
 template:`<weather-widget></weather-widget>`
})
export class AppComponent {
  title = 'app';
}
