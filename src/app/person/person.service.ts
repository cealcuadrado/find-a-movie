import { ConfigurationResult } from './../shared/interfaces/configuration-result';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';
import { PersonDetail } from '../shared/interfaces/person-detail';
import { catchError } from 'rxjs/operators';
import { Config } from 'protractor';

@Injectable({
  providedIn: 'root'
})
export class PersonService {

  private url = environment.apiUrl;
  private key = environment.apiKey;
  private language = environment.language;

  constructor(
    private http: HttpClient
  ) { }

  getPerson(id: string): Observable<PersonDetail> {
    return this.http.get<PersonDetail>(`${this.url}/person/${id}?api_key=${this.key}&language=${this.language}`).pipe(
      catchError((error: any): Observable <any> => {
        return of({});
      })
    );
  }
}
