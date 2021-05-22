import { Component } from '@angular/core';

// Komponent to klasa
// Zajmuje się wyświetlaniem widoków HTML i obsługą zdarzeń

// Główny komponent jest rodzicem

@Component({
  selector: 'app-root',
  // Start zawsze jest od głównego komponentu
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'udemy-marcin';
}
