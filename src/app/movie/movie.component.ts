import { CastAndCrewSummaryComponent } from './cast-and-crew-summary/cast-and-crew-summary.component';
import { MovieTrailerComponent } from './movie-trailer/movie-trailer.component';
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
  public loading = true;
  public movieDetail: MovieDetail;
  public id: string;
  public director: string;
  private posterUrl: string = environment.posterUrl;
  private backdropUrl: string = environment.backdropUrl;
  private imdbUrl: string = environment.imdbUrl;

  public cast: Cast[] = [];
  public crew: Crew[] = [];

  @ViewChild(CastAndCrewSummaryComponent, { static: true })
  castAndCrewSummary: CastAndCrewSummaryComponent;
  @ViewChild(MovieTrailerComponent, { static: true })
  movieTrailer: MovieTrailerComponent;


  constructor(
    private activatedRoute: ActivatedRoute,
    private movie: MovieService,
    private titleService: Title,
  ) {}

  ngOnInit(): void {
    console.log('ngOnInit movie');
    this.getMovie();
  }

  ngOnChanges(): void {
    console.log('ngOnChanges() movie');
    this.loading = true;
    this.getMovie();
  }

  getMovie(): void {
    console.log('getMovie()');
    this.activatedRoute.params.subscribe((params) => {
      if (params.id) {
        this.id = params.id;
        this.getDetails();
        this.getDirector();
        this.getCastAndCrew();
      }
    });
  }

  getDetails(): void {
    this.movie.getMovieDetail(this.id).subscribe((detail) => {
      if (Object.values(detail).length > 0) {
        console.log(detail);
        this.movieDetail = detail;
        this.setWindowTitle();
      }
      this.loading = false;
    });
  }

  getDirector(): void {
    this.movie.getDirector(this.id).subscribe((director) => {
      this.director = director.name;
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
      `${this.setLocalOrForeignTitle(detail)} (${date.getFullYear()}) | Find a Movie`
    );
  }

  setLocalOrForeignTitle(detail: MovieDetail): string {
    return !detail.original_language.match('en') && !detail.original_title.match(detail.title)
      ? `${detail.title} (${detail.original_title})`
      : detail.title;
  }

  setPosterUrl(posterPath: string | null) {
    return {
      backgroundImage: posterPath
        ? `url(${this.posterUrl}${posterPath})`
        : null,
    };
  }

  isPosterUrl(posterPath: string | null) {
    return posterPath;
  }

  setBackdropUrl(backdropPath: string | null): string {
    return !backdropPath
      ? 'https://via.placeholder.com/600x450?text=No+image+available'
      : `${this.backdropUrl}${backdropPath}`;
  }

  setHeaderBackdrop(backdropPath: string | null) {
    if (backdropPath) {
      return {
        backgroundImage: `url(${this.setBackdropUrl(
          this.movieDetail.backdrop_path
        )})`,
        backgroundSize: 'cover',
        backgroundPosition: 'top',
      };
    } else {
      return {
        backgroundImage: `url(${this.setBackdropUrl(
          this.movieDetail.backdrop_path
        )})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      };
    }
  }

  isDateEmpty(dateStr: string): boolean {
    return dateStr.length == 0;
  }

  setImdbUrl(imdbId: string): string {
    return `${this.imdbUrl}${imdbId}`;
  }

  setTmdbUrl(tmdbId: string): string {
    return 'foo';
  }

  isHomepageEmpty(homepagePath: string | null): boolean {
    if (homepagePath == null) {
      return false;
    } else if (homepagePath.length == 0) {
      return false;
    } else {
      return true;
    }
  }
}
