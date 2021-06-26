import { Component } from '@angular/core';

import { Task } from './task'

/**
 *  Data binding: 
 *  One way: HTML -> component class
 *  Property binding: component -> HTML
 *  Two way: component -> <- HTML
 *  
 *  DOM
 *  Object model of document
*/
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // Konfiguracja aplikacji
  // Obiekt przechowuje albo string albo datę
  config: { [key: string]: string | Date } = null

  tasks: Task[] = [
    { 
      name: 'Siłownia',
      deadline: '2020-01-02',
      done: false
    },
    {
      name: 'Nauka Angulara',
      deadline: '2020-02-02',
      done: false
    },
    {
      name: 'Sprzątanie',
      deadline: '2020-05-02',
      done: false
    }
  ];

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
