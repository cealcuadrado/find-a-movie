import { MovieListResult } from './../../../shared/interfaces/movie-list-result';
import { MovieService } from './../../movie.service';
import { Subscription } from 'rxjs';
import { MovieDetail } from './../../../shared/interfaces/movie-detail';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-movie-similar',
  templateUrl: './movie-similar.component.html',
  styleUrls: ['./movie-similar.component.scss']
})
export class MovieSimilarComponent implements OnInit {

  public loading = true;

  @Input() movieDetail: MovieDetail;

  public similarMovies: MovieListResult[] = [];

  private similarMovieSubscription: Subscription;

  constructor(
    private movie: MovieService
  ) { }

  ngOnInit(): void {
    this.loading = true;
    this.getSimilar();
  }

  ngOnChanges(): void {
    this.loading = true;
    this.getSimilar();
  }

  getSimilar(): void {
    this.similarMovieSubscription = this.movie
      .getSimilarMovies(this.movieDetail.id)
      .subscribe(queryResult => {
        this.similarMovies = queryResult.results.slice(0, 5);
        this.loading = false;
      });
  }

  ngOnDestroy(): void {
    this.similarMovieSubscription.unsubscribe();
  }
}
