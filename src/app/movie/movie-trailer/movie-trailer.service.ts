import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Injectable } from '@angular/core';
import { VideoSearchResult } from 'src/app/shared/interfaces/video-search-result';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MovieTrailerService {

  private url = environment.apiUrl;
  private key = environment.apiKey;
  private language = environment.language;

  constructor(
    private http: HttpClient
  ) { }

  getVideos(movieId: string): Observable<VideoSearchResult> {
    return this.http.get<VideoSearchResult>(
      `${this.url}/movie/${movieId}/videos?api_key=${this.key}&language=${this.language}`
    ).pipe(
      catchError((error: any): Observable<any> => {
        return of({});
      })
    )
  }

}
