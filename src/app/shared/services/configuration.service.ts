import { ConfigurationResult } from './../interfaces/configuration-result';
import { Observable, of } from 'rxjs';
import { environment } from './../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError } from 'rxjs/operators';
import { Language } from '../interfaces/language';

@Injectable({
  providedIn: 'root',
})
export class ConfigurationService {
  private url = environment.apiUrl;
  private key = environment.apiKey;

  constructor(private http: HttpClient) {}

  getConfiguration(): Observable<ConfigurationResult> {
    return this.http
      .get<ConfigurationResult>(`${this.url}/configuration?api_key=${this.key}`)
      .pipe(
        catchError((error: any): Observable<any> => {
          return of({});
        })
      );
  }

  getLanguages(): Observable<Language[]> {
    return this.http
      .get<Language[]>(
        `${this.url}/configuration/languages?api_key=${this.key}`
      )
      .pipe(
        catchError((error: any): Observable<any> => {
          return of({});
        })
      );
  }
}
