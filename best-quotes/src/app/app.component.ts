import { Component } from '@angular/core';
import { Quotation } from './models/quotation';
import { QUOTES } from './models/database';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  showForm = false;
  quotes: Quotation[] = QUOTES;
  quotation: Quotation = { author: '', quotation: '', votes: 0}

  onSwitchForm(): void {
    this.showForm = !this.showForm;
  }

  addQuotation() {
    // Add at start of the list
    this.quotes.unshift(this.quotation);
    this.quotation = { author: '', quotation: '', votes: 0};
  }
}
