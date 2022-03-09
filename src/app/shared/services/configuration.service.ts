import { ConfigurationResult } from './../interfaces/configuration-result';
import { Observable } from 'rxjs';
import { environment } from './../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Language } from '../interfaces/language';

@Injectable({
  providedIn: 'root',
})
export class ConfigurationService {

  private key = environment.apiKey;

  constructor(private http: HttpClient) {}

  getConfiguration(): Observable<ConfigurationResult> {
    return this.http
      .get<ConfigurationResult>(`/configuration?api_key=${this.key}`);
  }

  getLanguages(): Observable<Language[]> {
    return this.http
      .get<Language[]>(`/configuration/languages?api_key=${this.key}`);
  }
}
