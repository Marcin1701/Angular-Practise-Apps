import { Component } from '@angular/core';
import { User } from '../on-changes/on-changes.component';

@Component({
  selector: 'app-do-check',
  templateUrl: './do-check.component.html',
})
export class DoCheckComponent {
  user: User = {
    name: 'John',
    age: 35,
  };

  onChangeUser() {
    this.user.name = 'John Rambo';
  }
}
