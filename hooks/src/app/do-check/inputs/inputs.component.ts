import { Component, DoCheck, Input } from '@angular/core';
import { User } from '../../on-changes/on-changes.component';

@Component({
  selector: 'app-inputs',
  templateUrl: './inputs.component.html',
})
export class InputsComponent implements DoCheck {
  @Input() user: User;

  ngDoCheck(): void {
    console.log('DoCheck - wykryto zmianę!');
  }
}
