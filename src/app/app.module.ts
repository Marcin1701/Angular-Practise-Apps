import { BrowserModule } from '@angular/platform-browser';
import { LOCALE_ID, NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { registerLocaleData } from '@angular/common';

import localPl from '@angular/common/locales/pl';

registerLocaleData(localPl)

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    // domyślna lokalizacja - dla polskiej - globalna
    { provide: LOCALE_ID, useValue: 'pl-PL'}  
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
