import { Input } from '@angular/core';
import { Component } from '@angular/core';
import { Quotation } from '../models/quotation';

@Component({
  selector: 'app-ranking',
  templateUrl: './ranking.component.html',
  styleUrls: ['./ranking.component.css']
})
export class RankingComponent{

  // Dump component - wyświetla dane - jak tutaj
  // Logika jest w smart component

  @Input()
  category: string;

  @Input()
  quotes: Quotation[];
}
