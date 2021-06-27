import {
  AfterContentChecked,
  Component,
  ContentChild,
  DoCheck,
} from '@angular/core';
import { InputExampleComponent } from '../input-example/input-example.component';

@Component({
  selector: 'app-content-component',
  templateUrl: './content-component.component.html',
})
export class ContentComponentComponent implements AfterContentChecked, DoCheck {
  @ContentChild(InputExampleComponent) inputExample: InputExampleComponent;

  ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked: ', this.inputExample.text);
  }

  ngDoCheck(): void {
    // console.log('ngDoCheck: ', this.inputExample.text);
  }
}
