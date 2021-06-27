import { Component, HostListener, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-ng-destroy',
  templateUrl: './ng-destroy.component.html',
})
export class NgDestroyComponent implements OnDestroy {

  // @HostListener('window:beforeunload')
  ngOnDestroy(): void {
    console.log('ngOnDestroy: Zostałem znisczony');
  }
}
