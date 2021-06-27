import {
  AfterViewChecked,
  Component,
  ElementRef,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-after-view-checked',
  templateUrl: './after-view-checked.component.html',
})
export class AfterViewCheckedComponent implements AfterViewChecked {
  @ViewChild('wrapper') element: ElementRef;

  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked: ', this.element.nativeElement);
  }
}
