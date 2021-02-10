import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Injectable } from '@angular/core';
import { MovieDetail } from '../shared/interfaces/movie-detail';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  private url = environment.apiUrl;
  private key = environment.apiKey;
  private language = environment.language;

  constructor(private http: HttpClient) { }

  getMovieDetail(id: string): Observable<MovieDetail> {
    return this.http.get<MovieDetail>(`${this.url}/movie/${id}?api_key=${this.key}&language=${this.language}`);
  }
}
