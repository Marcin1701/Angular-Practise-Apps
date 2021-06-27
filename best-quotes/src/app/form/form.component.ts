import { Output } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { Quotation } from '../models/quotation';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {

  @Output() 
  newQuotation = 
    new EventEmitter<Quotation>();

  showForm = false;

  quotation: Quotation = 
    { author: '', quotation: '', votes: 0}

  onSwitchForm(): void {
    this.showForm = !this.showForm;
  }

  addQuotation() {
    this.newQuotation.emit(this.quotation);
    // Add at start of the list
    this.quotation = { author: '', quotation: '', votes: 0};
  }

}
