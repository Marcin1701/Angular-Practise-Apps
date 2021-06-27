import { Component } from '@angular/core';

@Component({
  selector: 'app-on-changes',
  templateUrl: './on-changes.component.html',
})
export class OnChangesComponent {
  user: User = {
    name: 'John',
    age: 34,
  };
  id = 1;

  onChangeUser() {
    this.user.name = 'John Rambo';
    this.id = 2;
  }

  onNewUser() {
    this.user = {
      name: 'Tarzan',
      age: 23,
    };
    this.id = 2;
  }
}

export interface User {
  name: string;
  age: number;
}
