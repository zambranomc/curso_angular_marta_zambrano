import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './layaut/navbar/navbar.component';
import { FooterComponent } from './layaut/footer/footer.component';
import { BooksModule } from './books/books.module';


import{ MatIconModule } from '@angular/material/icon';
import{ MatButtonModule } from '@angular/material/button';
import{  MatToolbarModule } from '@angular/material/toolbar';
import{  MatMenuModule } from '@angular/material/menu';
import{  MatGridListModule } from '@angular/material/grid-list';
import { AuthorsModule } from './authors/authors.module';
import { CategoriesModule } from './categories/categories.module';
import { AuthModule } from './auth/auth.module';
import { BookingsModule } from './bookings/bookings.module';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    BooksModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatMenuModule,
    MatGridListModule,
    AuthorsModule,
    AuthModule,
    CategoriesModule,
    BookingsModule
    


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
