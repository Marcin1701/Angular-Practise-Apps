import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
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

  deleteMovie(id: string): Observable<{}> {
    return this.http.delete<{}>(this.url + '/movies' + id);
  }

  makeError(): Observable<HttpErrorResponse> {
    return this.http.delete(this.url + '/' + 999).pipe(tap(console.log));
  }

  private handleError(error: HttpErrorResponse): Observable<never> {
    console.error(
      `Name: ${error.name} \n` +
      `Message: ${error.message} \n` +
      `Returned code: ${error.status} \n`
    );
    return throwError('Something bad happened; please try again later.');
  }
}
