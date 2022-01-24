import { ActivatedRoute } from '@angular/router';
import { MovieService } from './../movie.service';
import { Subscription } from 'rxjs';
import { MovieListResult } from './../../shared/interfaces/movie-list-result';
import { MovieDetail } from './../../shared/interfaces/movie-detail';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-similar-movies',
  templateUrl: './similar-movies.component.html',
  styleUrls: ['./similar-movies.component.scss']
})
export class SimilarMoviesComponent implements OnInit {

  public loadingView = true;
  public loadingMovies = true;

  public id: string;
  public similarMovies: MovieListResult[] = [];

  private similarMoviesSubscription: Subscription;

  constructor(
    private activatedRoute: ActivatedRoute,
    private movie: MovieService
  ) { }

  ngOnInit(): void {
    this.loadingView = true;
    this.loadingMovies = true;
    this.getSimilarMoviesView();
  }

  ngOnChanges(): void {
    this.loadingView = true;
    this.loadingMovies = true;
    this.getSimilarMoviesView();
  }

  private getSimilarMoviesView(): void {
    this.activatedRoute.parent?.params.subscribe(params => {
      if (params.id) {
        this.id = params.id;
        this.loadingView = false;
        this.getSimilarMovies();
      }
    });
  }

  private getSimilarMovies(): void {
    this.similarMoviesSubscription = this.movie
      .getSimilarMovies(this.id)
      .subscribe(queryResult => {
        this.similarMovies = queryResult.results.slice(0, 20);
        this.loadingMovies = false;
    });
  }

  ngOnDestroy(): void {
    this.similarMoviesSubscription.unsubscribe();
  }
}
