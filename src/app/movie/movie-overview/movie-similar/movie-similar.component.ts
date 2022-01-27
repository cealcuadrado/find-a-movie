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

  public loadingView: boolean = true;
  public loadingSimilar: boolean = true;

  @Input() movieDetail: MovieDetail;

  public similarMovies: MovieListResult[] = [];

  private similarMovieSubscription: Subscription;

  constructor(
    private movie: MovieService
  ) { }

  ngOnInit(): void {
    this.initMovieSimilar();
  }

  ngOnChanges(): void {
    this.initMovieSimilar();
  }

  private initMovieSimilar(): void {
    this.loadingView = true;
    this.loadingSimilar = true;
    this.getSimilar();
  }

  private getSimilar(): void {
    this.loadingView = false;
    this.similarMovieSubscription = this.movie
      .getRecommendedMovies(this.movieDetail.id)
      .subscribe(queryResult => {
        this.similarMovies = queryResult.results.slice(0, 5);
        this.loadingSimilar = false;
      });
  }

  public loading(): boolean {
    return (this.loadingView || this.loadingSimilar);
  }

  ngOnDestroy(): void {
    this.similarMovieSubscription.unsubscribe();
  }
}
