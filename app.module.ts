import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component'
import { AboutComponent } from 'C:/Users/Pradnya Borkar/Desktop/weather-app/src/app/about/about.component';
import { Forecast } from 'C:/Users/Pradnya Borkar/Desktop/weather-app/src/app/forecast/forecast.component';
import { WeatherComponent } from 'C:/Users/Pradnya Borkar/Desktop/weather-app/src/app/weather/weather.component';

@NgModule({
  declarations: [ AppComponent, AboutComponent, Forecast,WeatherComponent ],
  imports: [ BrowserModule, HttpModule, FormsModule ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
