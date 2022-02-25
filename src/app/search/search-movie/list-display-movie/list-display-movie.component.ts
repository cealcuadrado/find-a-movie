import { MovieListResult } from 'src/app/shared/interfaces/movie-list-result';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-display-movie',
  templateUrl: './list-display-movie.component.html',
  styleUrls: ['./list-display-movie.component.scss']
})
export class ListDisplayMovieComponent implements OnInit {

  @Input() searchResults: MovieListResult[] = [];
  @Input() currentPage: number = 0;
  @Input() totalResults: number = 0; 

  constructor() { }

  ngOnInit(): void {
  }

}
