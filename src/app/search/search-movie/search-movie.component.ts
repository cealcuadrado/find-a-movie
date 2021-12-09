import { Subscription } from 'rxjs';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { MovieListResult } from 'src/app/shared/interfaces/movie-list-result';
import { SearchService } from '../search.service';

@Component({
  selector: 'app-search-movie',
  templateUrl: './search-movie.component.html',
  styleUrls: ['./search-movie.component.scss'],
})
export class SearchMovieComponent implements OnInit {
  public loadingView: boolean = true;
  public loadingResults: boolean = true;

  public currentPage: number;
  public resultsPerPage = 20;

  public totalResults: number;
  public totalPages: number;
  public searchResults: MovieListResult[] = [];

  public searchQuery: string;

  public pageNumbers: number[];
  public selectPage: number;

  private searchSubscription: Subscription;

  constructor(
    private activatedRoute: ActivatedRoute,
    private search: SearchService,
    private window: Window,
    private titleService: Title
  ) {}

  ngOnInit(): void {
    this.setSearch();
  }

  ngOnChanges(): void {
    this.setSearch();
  }

  private setSearch(): void {
    this.loadingView = true;
    this.loadingResults = true;

    this.activatedRoute.params.subscribe((params) => {
      this.searchQuery = params.query;
      this.loadingView = false;
      this.firstSearch();
    });
  }

  private firstSearch(): void {
    this.currentPage = 1;
    this.selectPage = 1;
    this.searchMovies();
  }

  private searchMovies(): void {
    this.searchSubscription = this.search.searchMovies(this.searchQuery, this.currentPage).subscribe(
      (querySearchResult) => {
        console.log(querySearchResult);
        if (querySearchResult.results) {
          this.searchResults = querySearchResult.results;
          this.totalResults = querySearchResult.total_results;
          this.totalPages = querySearchResult.total_pages;
          console.log(this.totalPages);
          this.titleService.setTitle(
            `Search Results for: ${this.searchQuery} | Find a Movie`
          );
          this.generateSelectPageNumbers();
        }
      },
      (error) => {
        console.log(error);
      },
      () => {
        this.loadingResults = false;
      }
    );
  }

  public calculateLeftCounter(): number {
    return this.resultsPerPage * (this.currentPage - 1) + 1;
  }

  public calculateRightCounter(): number {
    return this.resultsPerPage * this.currentPage < this.totalResults
      ? this.resultsPerPage * this.currentPage
      : this.totalResults;
  }

  private generateSelectPageNumbers(): void {
    this.pageNumbers = [];
    for (let i = 0; i < this.totalPages; i++) {
      this.pageNumbers.push(i + 1);
    }
    console.log(this.pageNumbers);
  }

  public changeSelectPage(event: any) {
    this.onPageChange(event.target.value);
  }

  public onPageChange(event: any): void {
    console.log(event);
    this.currentPage = event;
    this.selectPage = this.currentPage;
    this.window.scrollTo({ top: 0 });
    this.searchMovies();
  }

  ngOnDestroy() {
    this.searchSubscription.unsubscribe();
  }
}
