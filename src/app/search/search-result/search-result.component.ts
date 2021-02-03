import { environment } from 'src/environments/environment';
import { MovieListResult } from './../../shared/interfaces/movie-list-result';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.scss']
})
export class SearchResultComponent implements OnInit {

  private imageUrl: string = environment.imageUrl;
  @Input() searchResult: MovieListResult;

  constructor() { }

  ngOnInit(): void {
  }

  setImageUrl(posterPath: string | null) {
    return !posterPath
      ? 'https://via.placeholder.com/500x300?text=No+poster+available'
      : `${this.imageUrl}${this.searchResult.poster_path}`;

    if (!posterPath) {
      return
    }
    return `${this.imageUrl}`;
  }

}
