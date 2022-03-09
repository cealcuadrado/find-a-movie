import { PersonMovieCredits } from './../shared/interfaces/person-movie-credits';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';
import { PersonDetail } from '../shared/interfaces/person-detail';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PersonService {
  private key = environment.apiKey;
  private language = environment.language;

  private currentTab = new BehaviorSubject<number>(1);

  constructor(
    private http: HttpClient
  ) { }

  public getPerson(id: string): Observable<PersonDetail> {
    return this.http.get<PersonDetail>(`/person/${id}?api_key=${this.key}&language=${this.language}`);
  }

  public getMovieCredits(id: string): Observable<PersonMovieCredits> {
    return this.http.get<PersonMovieCredits>(`/person/${id}/movie_credits?api_key=${this.key}&language=${this.language}`);
  }

  public setCurrentTab(tabNumber: number): void {
    this.currentTab.next(tabNumber);
  }

  public getCurrentTab(): Observable<number> {
    return this.currentTab.asObservable();
  }
}
