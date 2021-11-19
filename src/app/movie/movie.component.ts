import { CastAndCrewSummaryComponent } from './movie-overview/cast-and-crew-summary/cast-and-crew-summary.component';
import { MovieTrailerComponent } from './movie-overview/movie-trailer/movie-trailer.component';
import { environment } from './../../environments/environment';
import { MovieService } from './movie.service';
import { MovieDetail } from './../shared/interfaces/movie-detail';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Cast } from '../shared/interfaces/cast';
import { Crew } from '../shared/interfaces/crew';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss'],
})
export class MovieComponent implements OnInit {
  public active = 1;
  public loading = true;
  public movieDetail: MovieDetail;
  public id: string;
  public director: string;
  private posterUrl: string = environment.posterUrl;
  private backdropUrl: string = environment.backdropUrl;

  public cast: Cast[] = [];
  public crew: Crew[] = [];

  @ViewChild(CastAndCrewSummaryComponent, { static: true })
  castAndCrewSummary: CastAndCrewSummaryComponent;
  @ViewChild(MovieTrailerComponent, { static: true })
  movieTrailer: MovieTrailerComponent;

  constructor(
    private activatedRoute: ActivatedRoute,
    private movie: MovieService,
    private titleService: Title
  ) {}

  ngOnInit(): void {
    this.getMovie();
  }

  ngOnChanges(): void {
    this.loading = true;
    this.getMovie();
  }

  setMainTab() {
    this.active = 1;
  }

  getMovie(): void {
    this.activatedRoute.params.subscribe((params) => {
      if (params.id) {
        this.id = params.id;
        this.getDetails();
        this.getCastAndCrew();
      }
    });
  }

  getDetails(): void {
    this.setMainTab();
    this.movie.getMovieDetail(this.id).subscribe((detail) => {
      if (Object.values(detail).length > 0) {
        this.movieDetail = detail;
        this.setWindowTitle();
      }
      this.loading = false;
    });
  }

  getCastAndCrew(): void {
    this.movie.getCastAndCrew(this.id).subscribe((result) => {
      this.cast = result.cast;
      this.crew = result.crew;
    });
  }

  setWindowTitle(): void {
    let date = new Date(this.movieDetail.release_date);
    let detail = this.movieDetail;
    this.titleService.setTitle(
      `${this.setLocalOrForeignTitle(
        detail
      )} (${date.getFullYear()}) | Find a Movie`
    );
  }

  setLocalOrForeignTitle(detail: MovieDetail): string {
    return !detail.original_language.match('en') &&
      !detail.original_title.match(detail.title)
      ? `${detail.title} (${detail.original_title})`
      : detail.title;
  }
}
