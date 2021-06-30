import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Movie } from '../models/movie';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HttpMoviesService {

  private url = 'http://localhost:3000';

  constructor(private http: HttpClient) {}

  // getMovies(): Observable<Movie[]> {
  //   return this.http.get<Movie[]>(this.url + '/movies')
  //     .pipe(tap(console.log));
  // }

  getMovies(): Observable<Movie[]> {
    return this.http.get<HttpResponse<Movie[]>>(this.url + '/movies',
      {observe: 'response'})
      .pipe(tap(console.log));
  }

  postMovie(movie: Movie): Observable<Movie> {
    return this.http.post(this.url + '/movies', movie)
      .pipe(tap(console.log))
  }

  putMovie(id: number, movie: Movie): Observable<Movie> {
    return this.http.put<Movie>(this.url + '/movies/' + id, movie);
  }

  patchMovie(movie: Partial<Movie>): Observable<Movie> {
    return this.http.patch<Movie>(this.url + '/movies/' + movie.id, movie);
  }
}
