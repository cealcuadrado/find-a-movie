import { MovieListResult } from './../../../shared/interfaces/movie-list-result';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-grid-display-movie',
  templateUrl: './grid-display-movie.component.html',
  styleUrls: ['./grid-display-movie.component.scss']
})
export class GridDisplayMovieComponent implements OnInit {

  @Input() searchResults: MovieListResult[] = [];
  @Input() currentPage: number = 0;
  @Input() totalResults: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

}
