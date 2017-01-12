import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

import { HotelSearchComponent } from 'pages/hotel-search/hotel-search';
import { HotelSearchCardComponent } from 'pages/hotel-search/search-card/search-card';
import { HotelSearchFiltersComponent } from 'pages/hotel-search/search-filters/search-filters';

@NgModule({
  declarations: [
    AppComponent,
    HotelSearchComponent,
    HotelSearchCardComponent,
    HotelSearchFiltersComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
