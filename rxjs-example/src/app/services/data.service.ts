import { Injectable } from '@angular/core';
import { DataBaseService, Person } from './data-base.service';
import { BehaviorSubject, Observer, PartialObserver, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataService {

  behaviorSubject = new BehaviorSubject<Person[]>([]);

  subject = new Subject<Person[]>();

  constructor(private dataBaseService: DataBaseService) {
    this.init();
  }

  addPerson(person: Person) {

  }

  private init(): void {
    this.dataBaseService.fetchPersons().subscribe(
      // Recieve person and send into behaviorSubject and subject
      (persons: Person[]) => {
        this.behaviorSubject.next(persons);
        this.subject.next(persons);
      },
      // Log any errors
      error => console.log(error),
      // Invoke complete method
      () => console.log('Complete!')
    );
  }



}
