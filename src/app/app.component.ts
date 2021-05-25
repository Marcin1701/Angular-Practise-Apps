import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Lista zadań';
  counter = 0;

  // W angularze jest specjalny mechanizm change detection

  constructor() {
    // Inkrementacja co 200ms
    setInterval(() => { this.counter++ }, 1000);
  }

  incrementCounter() {
    this.counter++;
  }  

  getFooter(): string {
    return '2021 © Lista zadań zbudowana w Angularze.';
  }

  get GetterFooter(): string {
    return 'Footer from TS getter!';
  }

  getDate(): Date {
    return new Date();
  }

  getNumber() {
    return 2;
  }

  getPerson() {
    return { 
      name: "Marcin",
      age: "22"
    }
  }
}
