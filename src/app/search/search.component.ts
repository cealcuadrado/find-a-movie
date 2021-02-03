import { MovieListResult } from './../shared/interfaces/movie-list-result';
import { SearchService } from './search.service';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { QuerySearchResult } from '../shared/interfaces/query-search-result';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  public flagLoadingResults: boolean = false;
  public query: string = 'indiana jones';
  public imageUrl: string = environment.imageUrl;

  public currentPage: number = 1;
  public resultsPerPage = 20;

  public totalResults: number;
  public totalPages: number;
  public searchResults: MovieListResult[] = [];

  constructor(
    private search: SearchService
  ) { }

  ngOnInit(): void {
    this.flagLoadingResults = true;
    this.search.searchMovies(this.query, 1).subscribe((querySearchResult) => {
      this.searchResults = querySearchResult.results;
      this.totalResults = querySearchResult.total_results;
      this.totalPages = querySearchResult.total_pages;
    }, (error) => {
        console.log(error);
    }, () => {
        this.flagLoadingResults = false;
    });
  }

  calculateLeftCounter(): number {
    return (this.resultsPerPage * (this.currentPage - 1)) + 1;
  }


  calculateRightCounter(): number {
    return ((this.resultsPerPage * this.currentPage) < this.totalPages) ? this.totalResults : (this.resultsPerPage * this.currentPage);
  }



}
