import { Component } from '@angular/core';

@Component({
  selector: 'app-error-checked',
  templateUrl: './error-checked.component.html',
})
export class ErrorCheckedComponent {
  text: string;

  isDisabled(): boolean {
    if (this.text === 'okoń') {
      this.text = '';
      return false;
    }
    return true;
  }
}
