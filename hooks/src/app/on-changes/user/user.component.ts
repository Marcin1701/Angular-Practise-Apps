import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { User } from '../on-changes.component';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
})
export class UserComponent implements OnChanges {
  private user2: User;

  @Input() user: User;
  @Input() id: number;
  @Input() set setUser2(user: User) {
    this.user2 = user;
    console.log('Setter: ', user);
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('onChanges: ', changes);
  }
}
