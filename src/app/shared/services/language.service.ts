import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Language } from '../interfaces/language';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {

  key = environment.apiKey;

  constructor(
    private http: HttpClient
  ) { }

  getLanguages(): Observable<Language[]> {
    return this.http.get<Language[]>(`/configuration/languages?api_key=${this.key}`);
  }

}
