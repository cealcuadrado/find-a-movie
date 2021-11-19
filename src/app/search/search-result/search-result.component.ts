import { environment } from 'src/environments/environment';
import { MovieListResult } from './../../shared/interfaces/movie-list-result';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.scss'],
})
export class SearchResultComponent implements OnInit {

  private posterUrl: string = environment.posterUrl;
  @Input() searchResult: MovieListResult;

  constructor() {}

  ngOnInit(): void {}

  public setPosterUrl(posterPath: string | null) {
    return !posterPath
      ? 'null'
      : `${this.posterUrl}${this.searchResult.poster_path}`;
  }

  public isPosterUrl(posterPath: string | null) {
    return posterPath;
  }

  public setLocalOrForeignTitle(): string {
    return !this.searchResult.original_language.match('en') && !this.searchResult.original_title.match(this.searchResult.title)
      ? `${this.searchResult.title} (${this.searchResult.original_title})`
      : this.searchResult.title;
  }

  public isDateEmpty(dateStr: string): boolean {
    return dateStr.length == 0;
  }
}
