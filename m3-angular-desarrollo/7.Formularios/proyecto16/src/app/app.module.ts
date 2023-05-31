import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UserFormComponent } from './user-form/user-form.component';
import { ReactiveFormsModule } from '@angular/forms';

import{ MatFormFieldModule} from '@angular/material/form-field';
import{ MatInputModule } from '@angular/material/input';
import{ MatIconModule } from '@angular/material/icon';
import{ MatButtonModule } from '@angular/material/button';
import{ MatCheckboxModule } from '@angular/material/checkbox';
import{ MatRadioModule } from '@angular/material/radio';
import{ MatSelectModule } from '@angular/material/select';
import {MAT_DATE_LOCALE, MatNativeDateModule} from '@angular/material/core';
import {MatDatepickerModule} from '@angular/material/datepicker';


@NgModule({
  declarations: [
    AppComponent,
    UserFormComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    MatCheckboxModule,
    MatRadioModule,
    MatSelectModule,
    MatNativeDateModule,
    MatDatepickerModule
  ],
  providers: [
    {provide: MAT_DATE_LOCALE, useValue: 'es-Es'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
