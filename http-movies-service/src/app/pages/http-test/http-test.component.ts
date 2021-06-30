import { Component } from '@angular/core';
import { HttpMoviesService } from '../../services/http-movies.service';
import { Movie } from '../../models/movie';

@Component({
  selector: 'app-http-test',
  templateUrl: './http-test.component.html',
  styleUrls: ['./http-test.component.css'],
})
export class HttpTestComponent {

  errorMessage: string;

  testMovie: Movie;

  constructor(private http: HttpMoviesService) {}

  get() {
    this.http.getMovies().subscribe();
  }

  post() {
    const testMovie: Movie = {
      country: 'Poland',
      director: 'Marek Brodzki',
      category: 'Fantasy',
      plot: 'Zabójca potworów musi wybrać mniejsze zło.',
      poster: null,
      year: '2001',
      title: 'Wiedźmin',
      imdbRating: '10.0'
    };
    this.http.postMovie(testMovie).subscribe(data =>
      this.testMovie = data
    );
  }

  put() {
    const newMovieObject: Movie = {
      id: this.testMovie.id,
      country: 'Poland',
      director: 'Marek Brodzki',
      category: 'Fantasy',
      plot: 'Zabójca potworów musi wybrać mniejsze zło.',
      poster: null,
      year: '2001',
      title: 'Wiedźmin',
      imdbRating: '10.0'
    }
    this.http.putMovie(Number(this.testMovie.id), newMovieObject);
  }

  patch() {
    const partialMovie: Partial<Movie> = {
      id: this.testMovie.id,
      plot: 'New plot'
    }
    this.http.patchMovie(partialMovie).subscribe()
  }

  delete() {
    this.http.deleteMovie(this.testMovie.id).subscribe();
  }

  error() {
    this.http.makeError().subscribe({ error: (err: string) =>
      this.errorMessage = err
    });
  }

  headers() {
    this.http.headers().subscribe();
  }
}
