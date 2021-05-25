import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Lista zadań';


  getFooter(): string {
    return '2021 © Lista zadań zbudowana w Angularze.';
  }

  get GetterFooter(): string {
    return 'Footer from TS getter!';
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
