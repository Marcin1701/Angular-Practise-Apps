import { Input } from '@angular/core';
import { Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { Component } from '@angular/core';
import { Quotation } from '../models/quotation';

@Component({
  selector: 'app-button-votes',
  templateUrl: './button-votes.component.html',
  styleUrls: ['./button-votes.component.css']
})
export class ButtonVotesComponent {

  @Input()
  voteValue: number;

  @Input()
  voteIcon: string;

  @Input()
  customClasses: string;

  @Input()
  votes: number

  @Output()
  newVotes = new EventEmitter<number>();

  cssMaterialClass = "material-icons";

  addVote() {
    this.voteValue = Number(this.voteValue);
    this.votes = Number(this.votes);
    this.votes += this.voteValue;
    this.newVotes.emit(this.votes);
  }
}
