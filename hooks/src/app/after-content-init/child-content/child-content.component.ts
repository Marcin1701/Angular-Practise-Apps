import {
  AfterContentInit,
  Component,
  ContentChild,
  ElementRef,
  OnInit,
} from '@angular/core';

@Component({
  selector: 'app-child-content',
  templateUrl: './child-content.component.html',
})
export class ChildContentComponent implements AfterContentInit, OnInit {
  @ContentChild('title') title: ElementRef;

  ngAfterContentInit(): void {
    console.log('ngAfterContentInit: ', this.title);
  }

  ngOnInit(): void {
    console.log('ngOnInit: ', this.title);
  }
}
