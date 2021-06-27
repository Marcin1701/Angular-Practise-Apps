import { Injectable } from '@angular/core';
import { WORDS } from '../data/data-base';
import { WordType } from '../data/models';

@Injectable({
  providedIn: 'root'
})
export class WordsService {

  private words: WordType[] = [];
  private nouns: WordType[] = [];
  private verbs: WordType[] = [];

  constructor() {
    this.words = WORDS;
   }
}
