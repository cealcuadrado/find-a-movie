import { MovieListResult } from './../../../shared/interfaces/movie-list-result';
import { MovieService } from './../../../movie/movie.service';
import { MovieSearchService } from './../../../shared/shared-services/movie-search.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  searchForm: FormGroup;
  isMenuCollapsed = true;

  public barResults: MovieListResult[] = [];

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private movieSearch: MovieSearchService,
  ) {}

  ngOnInit(): void {
    this.searchForm = this.fb.group({
      searchQuery: new FormControl(''),
    });
  }

  onSubmit(): void {
    let value = this.searchForm.value.searchQuery;
    this.router.navigate(['/search', value]).then(result => {
      this.barResults = [];
    });
  }

  toggleCollapse(): void {
    this.isMenuCollapsed = !this.isMenuCollapsed;
  }

  onSearchInput(): void {
    let query = this.searchForm.value.searchQuery;

    if (query.length < 2) {
      this.barResults = [];
      console.log(this.barResults);
      return;
    }

    this.movieSearch.searchMovies(query, 1).subscribe((querySearchResult) => {
      this.barResults = querySearchResult.results.slice(0, 5);
      console.log(this.barResults);
    });
  }

  isDateEmpty(dateStr: string): boolean {
    return dateStr.length == 0;
  }

  goToMovie(id: number): void {
    this.router.navigate(['/movie', id]).then(result => {
      this.barResults = [];
    });
  }
}
