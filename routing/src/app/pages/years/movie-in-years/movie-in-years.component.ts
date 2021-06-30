import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../../services/http.service';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs';
import { Movie } from '../../../models/movie';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-movie-in-years',
  templateUrl: './movie-in-years.component.html',
  styleUrls: ['./movie-in-years.component.css']
})
export class MovieInYearsComponent implements OnInit {

  movies: Observable<Movie[]>;

  constructor(private http: HttpService,
              private router: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.movies = this.router.paramMap.pipe(
      switchMap((params: ParamMap) =>
        this.http.getMoviesFromYear(params.get('year'))
      )
    )
  }
}
