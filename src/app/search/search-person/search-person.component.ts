import { Title } from '@angular/platform-browser';
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { SearchService } from '../search.service';
import { PersonListResult } from 'src/app/shared/interfaces/person-list-result';

@Component({
  selector: 'app-search-person',
  templateUrl: './search-person.component.html',
  styleUrls: ['./search-person.component.scss'],
})
export class SearchPersonComponent implements OnInit {

  public loadingView: boolean = true;
  public loadingResults: boolean = true;

  public currentPage: number;
  public resultsPerPage = 20;

  public totalResults: number;
  public totalPages: number = 0;
  public searchResults: PersonListResult[] = [];

  public searchQuery: string;

  public pageNumbers: number[] = [];
  public selectPage: number = 0;

  public displayMode: string = 'grid';

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
    this.searchPeople();
  }

  private searchPeople(): void {
    this.searchSubscription = this.search
      .searchPeople(this.searchQuery, this.currentPage)
      .subscribe((queryPersonResult) => {
        if (queryPersonResult.results) {
          console.log(queryPersonResult.results);
          this.searchResults = queryPersonResult.results;
          this.totalResults = queryPersonResult.total_results;
          this.totalPages = queryPersonResult.total_pages;
          this.titleService.setTitle(
            `Search Results for: ${this.searchQuery} | Find a Movie`
          );
          this.generateSelectPageNumbers();
          this.loadingResults = false;
        }
      });
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
    this.searchPeople();
  }

  public changePageBySelect(page: number) {
    this.onPageChange(page);
  }

  public changeDisplayMode(mode: string): void {
    this.displayMode = mode;
  }

  public isDisplayMode(str: string): string {
    return this.displayMode.includes(str) ? 'active' : '';
  }

  ngOnDestroy() {
    this.searchSubscription.unsubscribe();
  }
}
