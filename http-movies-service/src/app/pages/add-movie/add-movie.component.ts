import { Component, OnInit } from '@angular/core';
import { Movie } from '../../models/movie';
import { HttpService } from '../../services/http.service';

@Component({
  selector: 'app-add-movie',
  templateUrl: './add-movie.component.html',
  styleUrls: ['./add-movie.component.css']
})
export class AddMovieComponent implements OnInit {

  model: Partial<Movie> = {};

  categories: string[] = [];

  years: string[] = [];

  constructor(private http: HttpService) {}

  ngOnInit(): void {
    this.http.getCategories().subscribe(
      data => this.categories = data
    );
    this.http.getYears().subscribe(
      data => this.years = data
    );
  }

  send() {
    console.log(this.model);
  }
}
