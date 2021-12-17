import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { Component, ElementRef, HostListener, OnInit } from '@angular/core';
import { SearchService } from 'src/app/search/search.service';
import { MovieListResult } from 'src/app/shared/interfaces/movie-list-result';
import { HttpEventType } from '@angular/common/http';

@Component({
  selector: 'app-bar-movie',
  templateUrl: './bar-movie.component.html',
  styleUrls: ['./bar-movie.component.scss'],
})
export class BarMovieComponent implements OnInit {
  public searchForm: FormGroup;

  public movieBarResults: MovieListResult[] = [];
  public currentResult: number = 0;

  public showAutocompleteResults: boolean = true;

  public movieSearchSubscription: Subscription;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private search: SearchService,
    private eRef: ElementRef,
    private window: Window
  ) {}

  ngOnInit(): void {
    this.searchForm = this.fb.group({
      movieQuery: new FormControl(''),
    });
  }

  @HostListener('document:click', ['$event'])
  clickout(event: any) {
    this.showAutocompleteResults = this.eRef.nativeElement.contains(
      event.target
    );

    if (this.showAutocompleteResults) {
      this.onSearchInput(event);
    }
  }

  public onSearchInput(event: any): void {
    let query = this.searchForm.value.movieQuery;

    if (!query || query.length < 2) {
      this.resetAutocomplete();
      return;
    }

    this.movieSearchSubscription = this.search
      .searchMovies(query, 1)
      .subscribe((querySearchResult) => {
        if (querySearchResult.results) {
          this.movieBarResults = querySearchResult.results.slice(0, 5);
          this.resetCurrentResult();
        }
      });
  }

  public onSearch(event: any): void {
    this.window.setTimeout(() => {
      this.searchForm.reset();
      this.onSearchInput(event);
    }, 250);
  }

  public onSubmit(event: any): void {
    if (this.currentResult != 0) {
      event.preventDefault();
      this.goToMovie(this.movieBarResults[this.currentResult - 1].id);
    } else {
      let value = this.searchForm.value.movieQuery;
      this.router.navigate(['/search/movie', value]).then((result) => {
        this.movieBarResults = [];
      });
    }
    this.showAutocompleteResults = false;
  }

  public goToMovie(id: number): void {
    this.router.navigate(['/movie', id]).then((result) => {
      this.movieBarResults = [];
    });
  }

  public getFormattedTitle(
    result: MovieListResult,
    release_date: string
  ): string {
    let date = new Date(release_date);
    return `${this.setLocalOrForeignTitle(result)} `.concat(
      release_date ? `(${date.getFullYear()})` : '(No Release Date)'
    );
  }

  public setLocalOrForeignTitle(result: MovieListResult): string {
    return !result.original_language.match('en') &&
      !result.original_title.match(result.title)
      ? `${result.title} (${result.original_title})`
      : result.title;
  }

  public onSearchKeyDown(event: any): void {
    if (this.movieBarResults.length > 0) {
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
          ? this.movieBarResults.length
          : this.currentResult - 1;
    } else if (op == 'subtract') {
      this.currentResult =
        this.currentResult + 1 > this.movieBarResults.length
          ? 0
          : this.currentResult + 1;
    }
  }

  public resetCurrentResult(): void {
    this.showAutocompleteResults = true;
    this.currentResult = 0;
  }

  public resetAutocomplete(): void {
    this.showAutocompleteResults = false;
    this.movieBarResults = [];
    this.currentResult = 0;
  }
}
