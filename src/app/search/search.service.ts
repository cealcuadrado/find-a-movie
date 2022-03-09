import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of  } from 'rxjs';
import { environment } from 'src/environments/environment';
import { catchError } from 'rxjs/operators';
import { QueryMovieResult } from '../shared/interfaces/query-movie-result';
import { QueryPersonResult } from '../shared/interfaces/query-person-result';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  private key = environment.apiKey;
  private language = environment.language;

  constructor(
    private http: HttpClient
  ) { }

  searchMovies(query: string, page: number): Observable<QueryMovieResult> {
    return this.http
      .get<QueryMovieResult>(
        `/search/movie?api_key=${this.key}&query=${query}&language=${this.language}&page=${page}&include_adult=false`
      );
  }

  searchPeople(query: string, page: number): Observable<QueryPersonResult> {
    return this.http
      .get<QueryPersonResult>(
        `/search/person?api_key=${this.key}&query=${query}&language=${this.language}&page=${page}&include_adult=false`
      );
  }
}
