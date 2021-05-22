import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LoginService } from './LoginService';

// Wszystko w dekoratorze jest skłądową aplikacji angularowej
@NgModule({
  // Deklarujemy komponenty jeśli chcemy ich używać
  declarations: [
    AppComponent
  ],
  // Moduły
  imports: [
    BrowserModule
  ],
  // Informujemy aplikację o serwisach
  providers: [LoginService],
  // Komponenty od którego zaczyna się uruchamianie aplikacji
  bootstrap: [AppComponent]
})
export class AppModule { }
