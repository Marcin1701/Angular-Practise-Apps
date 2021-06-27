import { Component, Injectable, Input, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
class DataService {
  animals = new BehaviorSubject<Animal>({
    name: 'Reksio',
    type: 'pies',
  }).asObservable();
}

@Component({
  selector: 'app-animal',
  templateUrl: './animal.component.html',
  providers: [DataService],
})
export class AnimalComponent implements OnInit {
  @Input() title: string;
  animal: Animal;

  constructor(private dataService: DataService) {
    console.log('Constructor: ', this.title);
  }

  ngOnInit(): void {
    console.log('OnInit: ', this.title);
    this.dataService.animals.subscribe(data => (this.animal = data));
  }
}

export interface Animal {
  name: string;
  type: string;
}
