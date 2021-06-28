import { Injectable } from '@angular/core';
import { WORDS } from '../data/data-base';
import { Type, WordType } from '../data/models';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WordsService {

  private words = new BehaviorSubject<WordType[]>([]);
  private nouns = new Subject<WordType>();
  private verbs = new Subject<WordType>();

  constructor() {
    setTimeout(() => {
      this.words.next(WORDS);
    }, 2000);
   }

   getWords(): WordType[] {
     return this.words;
   }

   getNouns(): WordType[] {
     return this.nouns;
   }

   getVerbs(): WordType[] {
     return this.verbs;
   }

   addNoun(value: WordType): void {
     this.nouns.push(value);
   }

   addVerb(value: WordType): void {
     this.verbs.push(value);
   }

   check() {
    this.nouns.map(word =>
        (word.correct = word.type === Type.NOUN)
      );
    this.verbs.map(word =>
        (word.correct = word.type === Type.VERB)
      );
   }
}
