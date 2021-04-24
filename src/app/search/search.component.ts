import { MovieSearchService } from './../shared/shared-services/movie-search.service';
import { MovieListResult } from './../shared/interfaces/movie-list-result';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { QuerySearchResult } from '../shared/interfaces/query-search-result';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  public flagLoadingResults: boolean = false;
  public posterUrl: string = environment.posterUrl;

  public currentPage: number;
  public resultsPerPage = 20;

  public totalResults: number;
  public totalPages: number;
  public searchResults: MovieListResult[] = [];

  public searchQuery: string;

  constructor(
    private activatedRoute: ActivatedRoute,
    private search: MovieSearchService,
    private window: Window
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.searchQuery = params.query;
      this.firstSearch();
    });
  }

  firstSearch(): void {
    this.currentPage = 1;
    this.searchMovies();
  }

  searchMovies(): void {
    this.flagLoadingResults = true;
    this.search.searchMovies(this.searchQuery, this.currentPage).subscribe(
      (querySearchResult) => {
        this.searchResults = querySearchResult.results;
        // console.log(this.searchResults);
        this.totalResults = querySearchResult.total_results;
        this.totalPages = querySearchResult.total_pages;
      },
      (error) => {
        console.log(error);
      },
      () => {
        this.flagLoadingResults = false;
      }
    );
  }

  calculateLeftCounter(): number {
    return (this.resultsPerPage * (this.currentPage - 1)) + 1;
  }


  calculateRightCounter(): number {
    return (this.resultsPerPage * this.currentPage) < this.totalResults ? (this.resultsPerPage * this.currentPage) : this.totalResults;
  }

  onPageChange(event: any): void {
    this.currentPage = event;
    this.window.scrollTo({ top: 0 });
    this.searchMovies();
  }
}
