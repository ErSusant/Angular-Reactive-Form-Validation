import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms'; // Import ReactiveFormsModule

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
     
    // other components
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule // Include ReactiveFormsModule here
    // other modules
  ],
  providers: [],
  bootstrap: []
})
export class AppModule { }
