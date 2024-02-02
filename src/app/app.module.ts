import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PrimerComponenteComponent } from './primer-componente/primer-componente.component';
import { FormsModule } from '@angular/forms';
import { MapComponenteComponent } from './map-componente/map-componente.component';
import { ApiComponenteComponent } from './api-componente/api-componente.component';

@NgModule({
  declarations: [
    AppComponent,
    PrimerComponenteComponent,
    MapComponenteComponent,
    ApiComponenteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
