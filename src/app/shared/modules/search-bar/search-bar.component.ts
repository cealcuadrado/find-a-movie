import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { MovieListResult } from '../../interfaces/movie-list-result';
import { SearchService } from 'src/app/search/search.service';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss'],
})
export class SearchBarComponent implements OnInit {

  searchForm: FormGroup;

  public searchMode = 'Movies';
  public barResults: MovieListResult[] = [];
  public currentResult: number = 0;

  public movieSearchSubscription: Subscription;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private search: SearchService
  ) {}

  ngOnInit(): void {
    this.searchForm = this.fb.group({
      searchQuery: new FormControl(''),
    });
  }

  public changeSearchMode(searchMode: string): void {
    this.searchMode = searchMode;
  }

  public onSearchInput(): void {
    let query = this.searchForm.value.searchQuery;

    if (query.length < 2) {
      this.barResults = [];
      console.log(this.barResults);
      return;
    }

    this.movieSearchSubscription = this.search
      .searchMovies(query, 1)
      .subscribe((querySearchResult) => {
        if (querySearchResult.results) {
          console.log(querySearchResult.results);
          this.barResults = querySearchResult.results.slice(0, 5);
          this.resetCurrentResult();
        }
      });
  }

  public onSubmit(event: any): void {
    if (this.currentResult != 0) {
      event.preventDefault();
      this.goToMovie(this.barResults[this.currentResult - 1].id);
    } else {
      let value = this.searchForm.value.searchQuery;
      this.router.navigate(['/search', value]).then((result) => {
        this.barResults = [];
      });
    }
  }

  public goToMovie(id: number): void {
    this.router.navigate(['/movie', id]).then((result) => {
      this.barResults = [];
    });
  }

  public getFormattedTitle(result: MovieListResult, release_date: string
  ): string {
    let date = new Date(release_date);
    return `${this.setLocalOrForeignTitle(result)} `.concat(
      release_date ? `(${date.getFullYear()})` : '(No Release Date)'
    );
  }

  public setLocalOrForeignTitle(result: MovieListResult): string {
    return !result.original_language.match('en') && !result.original_title.match(result.title)
      ? `${result.title} (${result.original_title})`
      : result.title;
  }

  public onSearchKeyDown(event: any): void {
    if (this.barResults.length > 0) {
      if (event.keyCode == 40) {
        this.setCurrentResult('subtract');
      } else if (event.keyCode == 38) {
        this.setCurrentResult('add');
      }
    }
  }

  public onMouseOver(event: any, index: number): void {
    this.currentResult = index + 1;
  }

  public setCurrentResult(op: string): void {
    if (op == 'add') {
      this.currentResult =
        this.currentResult - 1 < 0
          ? this.barResults.length
          : this.currentResult - 1;
    } else if (op == 'subtract') {
      this.currentResult =
        this.currentResult + 1 > this.barResults.length
          ? 0
          : this.currentResult + 1;
    }
  }

  public resetCurrentResult(): void {
    this.currentResult = 0;
  }
}
