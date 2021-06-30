import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders, HttpParams, HttpResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { Movie } from '../models/movie';
import { catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HttpMoviesService {

  constructor(private http: HttpClient) {}

  private url = 'http://localhost:3000';

  private static handleError(error: HttpErrorResponse): Observable<never> {
    console.error(
      `Name: ${error.name} \n` +
      `Message: ${error.message} \n` +
      `Returned code: ${error.status} \n`
    );
    return throwError('Something bad happened; please try again later.');
  }

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
    return this.http.delete<{}>(this.url + '/movies/' + id);
  }

  makeError(): Observable<HttpErrorResponse> {
    return this.http.delete(this.url + '/' + 999)
      .pipe(tap(console.log), catchError(HttpMoviesService.handleError));
  }

  headers(): Observable<HttpResponse<Movie[]>> {
    const myHeaders = new HttpHeaders({
      Authorizations: 'token',
      'Content-Type': 'application/json',
      'X-Custom-Header': 'customowy naglowek',
    });
    return this.http
      .get(this.url + '/movies',
        { observe: 'response', headers: myHeaders })
      .pipe(
        tap((res: HttpResponse<Movie[]>) => {
          console.log(res.headers.keys());
          console.log(res.headers.get('Cache-Control'));
          console.log(res.headers.get('Content-Type'));
          console.log(res.headers.get('Expires'));
          console.log(res.headers.get('Pragma'));
        })
      );
  }

  params(): Observable<Movie> {
    const myParams = new HttpParams()
      .set('_sort', 'title')
      .set('_order', 'desc');
    return this.http
      .get<Movie[]>(this.url + '/movies', { params: myParams })
      .pipe(tap(console.log))
  }
}
