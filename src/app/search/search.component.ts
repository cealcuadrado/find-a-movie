import { MovieSearchService } from './../shared/shared-services/movie-search.service';
import { MovieListResult } from './../shared/interfaces/movie-list-result';
import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
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

  public pageNumbers: number[];
  public selectPage: number;

  constructor(
    private activatedRoute: ActivatedRoute,
    private search: MovieSearchService,
    private window: Window,
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      this.searchQuery = params.query;
      this.firstSearch();
    });
  }

  firstSearch(): void {
    this.currentPage = 1;
    this.selectPage = 1;
    this.searchMovies();
  }

  searchMovies(): void {
    this.flagLoadingResults = true;
    this.search.searchMovies(this.searchQuery, this.currentPage).subscribe(
      (querySearchResult) => {
        console.log(querySearchResult);
        if (querySearchResult.results) {
          this.searchResults = querySearchResult.results;
          this.totalResults = querySearchResult.total_results;
          this.totalPages = querySearchResult.total_pages;
          console.log(this.totalPages);
          this.generateSelectPageNumbers();
        }
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
    return this.resultsPerPage * (this.currentPage - 1) + 1;
  }

  calculateRightCounter(): number {
    return this.resultsPerPage * this.currentPage < this.totalResults
      ? this.resultsPerPage * this.currentPage
      : this.totalResults;
  }

  generateSelectPageNumbers(): void {
    this.pageNumbers = [];
    for (let i = 0; i < this.totalPages; i++) {
      this.pageNumbers.push(i + 1);
    }
    console.log(this.pageNumbers);
  }

  changeSelectPage(event: any) {
    this.onPageChange(event.target.value);
  }

  onPageChange(event: any): void {
    console.log(event);
    this.currentPage = event;
    this.selectPage = this.currentPage;
    this.window.scrollTo({ top: 0 });
    this.searchMovies();
  }
}
