import { QueryMovieResult } from './../shared/interfaces/query-movie-result';
import { CastCrewResult } from './../shared/interfaces/cast-crew-result';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Injectable } from '@angular/core';
import { MovieDetail } from '../shared/interfaces/movie-detail';
import { catchError, map } from 'rxjs/operators';
import { ExternalIds } from '../shared/interfaces/external-ids';
import { MovieTitlesResult } from '../shared/interfaces/movie-titles-result';

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  private url = environment.apiUrl;
  private key = environment.apiKey;
  private language = environment.language;

  constructor(private http: HttpClient) {}

  getMovieDetail(id: number | string): Observable<MovieDetail> {
    return this.http.get<MovieDetail>(
      `${this.url}/movie/${id}?api_key=${this.key}&language=${this.language}`
    ).pipe(
      catchError((error: any): Observable<any> => {
        return of({});
      })
    );
  }

  getCastAndCrew(id: number | string): Observable<CastCrewResult> {
    return this.http.get<CastCrewResult>(
        `${this.url}/movie/${id}/credits?api_key=${this.key}&language=${this.language}`
    ).pipe(
      catchError((error: any): Observable<any> => {
        return of({});
      })
    );
  }

  getExternalIds(id: number | string): Observable<ExternalIds> {
    return this.http.get<ExternalIds>(
      `${this.url}/movie/${id}/external_ids?api_key=${this.key}`
    ).pipe(
      catchError((error: any): Observable<any> => {
        return of({});
      })
    );
  }

  getSimilarMovies(id: number | string): Observable<QueryMovieResult> {
    return this.http.get<QueryMovieResult>(
      `${this.url}/movie/${id}/similar?api_key=${this.key}`
    ).pipe(
      catchError((error: any): Observable<any> => {
        return of({});
      })
    );
  }

  getRecommendedMovies(id: number | string): Observable<QueryMovieResult> {
    return this.http.get<QueryMovieResult>(
      `${this.url}/movie/${id}/recommendations?api_key=${this.key}`
    ).pipe(
      catchError((error: any): Observable<any> => {
        return of({});
      })
    );
  }

  getAlternateTitles(id: number | string): Observable<MovieTitlesResult> {
    return this.http.get<MovieTitlesResult>(
      `${this.url}/movie/${id}/alternative_titles?api_key=${this.key}`
    ).pipe(
      catchError((error: any): Observable<any> => {
        return of({})
      })
    );
  }
}
