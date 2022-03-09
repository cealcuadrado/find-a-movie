import { QueryMovieResult } from './../shared/interfaces/query-movie-result';
import { CastCrewResult } from './../shared/interfaces/cast-crew-result';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Injectable } from '@angular/core';
import { MovieDetail } from '../shared/interfaces/movie-detail';
import { ExternalIds } from '../shared/interfaces/external-ids';
import { MovieTitlesResult } from '../shared/interfaces/movie-titles-result';

@Injectable({
  providedIn: 'root',
})
export class MovieService {

  private key = environment.apiKey;
  private language = environment.language;

  constructor(private http: HttpClient) {}

  getMovieDetail(id: number | string): Observable<MovieDetail> {
    return this.http.get<MovieDetail>(
      `/movie/${id}?api_key=${this.key}&language=${this.language}`
    );
  }

  getCastAndCrew(id: number | string): Observable<CastCrewResult> {
    return this.http.get<CastCrewResult>(
      `/movie/${id}/credits?api_key=${this.key}&language=${this.language}`
    );
  }

  getExternalIds(id: number | string): Observable<ExternalIds> {
    return this.http.get<ExternalIds>(
      `/movie/${id}/external_ids?api_key=${this.key}`
    );
  }

  getSimilarMovies(id: number | string): Observable<QueryMovieResult> {
    return this.http.get<QueryMovieResult>(
      `/movie/${id}/similar?api_key=${this.key}`
    );
  }

  getRecommendedMovies(id: number | string): Observable<QueryMovieResult> {
    return this.http.get<QueryMovieResult>(
      `/movie/${id}/recommendations?api_key=${this.key}`
    );
  }

  getAlternateTitles(id: number | string): Observable<MovieTitlesResult> {
    return this.http.get<MovieTitlesResult>(
      `/movie/${id}/alternative_titles?api_key=${this.key}`
    );
  }
}
