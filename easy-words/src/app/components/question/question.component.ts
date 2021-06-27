import { Component, OnInit } from '@angular/core';
import { WordsService } from 'src/app/services/words.service';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {

  constructor(
    private wordsService: WordsService
  ) {

  }

  ngOnInit(): void {
  }

}
