import { Input } from '@angular/core';
import { Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Quotation } from '../models/quotation';

@Component({
  selector: 'app-quote-list',
  templateUrl: './quote-list.component.html',
  styleUrls: ['./quote-list.component.css']
})
export class QuoteListComponent {

  @Input()
  quotes: Quotation[];
  
  @Output()
  newQuotes = new EventEmitter<Quotation[]>();

  onAddQuotationVote(quotation: Quotation, votes: number) {
    this.quotes
    .filter(q => q === quotation)
    .map(q => q.votes = votes);
    this.newQuotes.emit(this.quotes)
  }
}
