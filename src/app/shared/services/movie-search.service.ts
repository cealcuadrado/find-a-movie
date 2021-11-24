import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Injectable } from '@angular/core';
import { QuerySearchResult } from '../interfaces/query-search-result';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MovieSearchService {

  private url = environment.apiUrl;
  private key = environment.apiKey;
  private language = environment.language;

  constructor(private http: HttpClient) { }

  searchMovies(query: string, page: number): Observable<QuerySearchResult> {
    return this.http.get<QuerySearchResult>(
      `${this.url}/search/movie?api_key=${this.key}&query=${query}&language=${this.language}&page=${page}&include_adult=false`
    ).pipe(
      catchError((error: any): Observable<any> => {
        return of({});
      })
    )
  }
}
