import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // Konfiguracja aplikacji
  // Obiekt przechowuje albo string albo datę
  config: { [key: string]: string | Date } = null

  constructor() {
    // Inicjalizacja z opóźnieniem
    // Pierwsza próba renderowania jest błędem
    // Dodajemy '?' aby opóźnić odwołanie do nulla
    setTimeout(() => {
      this.config = {
        title: 'Lista zadań',
        footer: 'Lista zadań Angular',
        date: new Date()
      };
    }, 500);
  }
}
