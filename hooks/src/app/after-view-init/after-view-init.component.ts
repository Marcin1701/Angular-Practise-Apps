import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { ViewComponent } from './view/view.component';

@Component({
  selector: 'app-after-view-init',
  templateUrl: './after-view-init.component.html',
})
export class AfterViewInitComponent implements AfterViewInit {
  @ViewChild(ViewComponent) component: ViewComponent;

  ngAfterViewInit(): void {
    console.log('ngAfterViewInit: ', this.component);
  }
}
