import { Component, Input } from '@angular/core';
import { User } from '../../on-changes/on-changes.component';

@Component({
  selector: 'app-component-b',
  templateUrl: './component-b.component.html',
})
export class ComponentBComponent {
  @Input() user: User;
}
