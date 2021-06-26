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
  taskName: string = "Zadanie codzienne";
  taskDate: string = "";
  editMode: boolean = false;
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
      done: true
    },
    {
      name: 'Sprzątanie',
      deadline: '2020-05-02',
      done: false
    }
  ];

  /*
    Print HTML as HTML - [innerHtml]="htmlcode" - sanitization can block scripts
  */

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
    this.sortTask();
  }

  clearTasks() {
    this.tasks = [];
  }

  createTask() {
    const task: Task = {
      name: this.taskName,
      deadline: this.taskDate,
      done: false
    };
    this.tasks.push(task);
    this.taskName = '';
    this.taskDate = '';
    this.sortTask();
  }

  switchEditMode() {
    this.editMode = !this.editMode;
  }

  markTaskAsDone(task: Task) {
    task.done = true;
    this.sortTask();
  }

  deleteTask(task: Task) {
    this.tasks = this.tasks.filter(e => e !== task)
    this.sortTask();
  }

  private sortTask() {
    this.tasks = this.tasks.sort((a: Task, b: Task) => 
      a.done === b.done ? 0 : a.done ? 1: -1
    );
  }
}
