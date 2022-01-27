import { LocalStorageService } from './../../shared/services/local-storage.service';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from './../movie.service';
import { Subscription } from 'rxjs';
import { MovieListResult } from './../../shared/interfaces/movie-list-result';
import { MovieDetail } from './../../shared/interfaces/movie-detail';
import { Component, Input, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-similar-movies',
  templateUrl: './similar-movies.component.html',
  styleUrls: ['./similar-movies.component.scss'],
})
export class SimilarMoviesComponent implements OnInit {
  public loadingView = true;
  public loadingMovies = true;

  public movieDetail: MovieDetail;
  public id: string;
  public similarMovies: MovieListResult[] = [];

  private similarMoviesSubscription: Subscription;

  constructor(
    private activatedRoute: ActivatedRoute,
    private movie: MovieService,
    private titleService: Title,
    private localStorage: LocalStorageService
  ) {}

  ngOnInit(): void {
    this.initSimilarMovies();
  }

  ngOnChanges(): void {
    this.initSimilarMovies();
  }

  initSimilarMovies(): void {
    this.loadingView = true;
    this.loadingMovies = true;
    this.getSimilarMoviesView();
  }

  private getSimilarMoviesView(): void {
    this.activatedRoute.parent?.params.subscribe((params) => {
      if (params.id) {
        this.id = params.id;
        this.loadingView = false;
        this.getSimilarMovies();
        this.setWindowTitle();
      }
    });
  }

  private getSimilarMovies(): void {
    this.similarMoviesSubscription = this.movie
      .getRecommendedMovies(this.id)
      .subscribe((queryResult) => {
        this.similarMovies = queryResult.results.slice(0, 20);
        this.loadingMovies = false;
      });
  }

  private setWindowTitle(): void {
    this.movieDetail = this.localStorage.get('currentMovie');
    let year = !this.isDateEmpty(this.movieDetail) ? new Date(this.movieDetail.release_date).getFullYear() : 'No Release Date';
    this.titleService.setTitle(`Similar Movies to ${this.setLocalOrForeignTitle()} (${year}) | Find a Movie`);
  }

  public isDateEmpty(detail: MovieDetail): boolean {
    return detail.release_date.length == 0;
  }

  public setLocalOrForeignTitle(): string {
    return !this.movieDetail.original_language.match('en') &&
      !this.movieDetail.original_title.match(this.movieDetail.title)
      ? `${this.movieDetail.title} (${this.movieDetail.original_title})`
      : this.movieDetail.title;
  }

  ngOnDestroy(): void {
    this.similarMoviesSubscription.unsubscribe();
  }
}
