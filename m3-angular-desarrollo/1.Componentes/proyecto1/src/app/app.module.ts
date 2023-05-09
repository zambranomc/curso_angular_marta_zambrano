import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { Component1Component } from './component1/component1.component';
import { HolaComponent } from './hola/hola.component';
import { Ejemplo1Component } from './ejemplo1/ejemplo1.component';

@NgModule({
  declarations: [
    AppComponent,
    Component1Component,
    HolaComponent,
    Ejemplo1Component
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
