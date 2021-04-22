import { environment } from 'src/environments/environment';
import { MovieListResult } from './../../shared/interfaces/movie-list-result';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.scss']
})
export class SearchResultComponent implements OnInit {

  private posterUrl: string = environment.posterUrl;
  @Input() searchResult: MovieListResult;

  constructor() { }

  ngOnInit(): void {
  }

  setPosterUrl(posterPath: string | null) {
    return !posterPath
      ? 'null'
      : `${this.posterUrl}${this.searchResult.poster_path}`;
  }

  isPosterUrl(posterPath: string | null) {
    return posterPath;
  }

  isDateEmpty(dateStr: string): boolean {
    return dateStr.length == 0;
  }


}
