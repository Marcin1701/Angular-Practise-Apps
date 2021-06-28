import { Injectable } from '@angular/core';
import { DataBaseService, Person } from './data-base.service';
import { BehaviorSubject, Observer, PartialObserver, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataService {

  behaviorSubject = new BehaviorSubject<Person[]>([]);

  subject = new Subject<Person[]>();

  constructor(private dataBaseService: DataBaseService) {}

  private init(): void {
    
  }

}
