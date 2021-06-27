import { Component } from '@angular/core';
import { Quotation } from './models/quotation';
import { QUOTES } from './models/database';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  quotes: Quotation[] = QUOTES;

  bestQuotes() {
    return this.quotes.filter(q => q.votes > 0);
  }

  worstQuotes() {
    return this.quotes.filter(q => q.votes < 0);
  }

  onNewQuotation(quotation: Quotation) {
    this.quotes.unshift(quotation);
  }

  onAddQuotationVote(quotation: Quotation, votes: number) {
    this.quotes
    .filter(q => q === quotation)
    .map(q => q.votes = votes);
  }
}
