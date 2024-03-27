import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TablasComponent } from './componentes/tablas/tablas.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    TablasComponent
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,// mosulo para realizar peticiones http
    FormsModule,// modulo de formularios
    ReactiveFormsModule // modulo de formularios reactivos 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
