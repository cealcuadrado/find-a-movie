import { MovieTrailerComponent } from './movie-trailer/movie-trailer.component';
import { CastAndCrewComponent } from './cast-and-crew/cast-and-crew.component';
import { environment } from './../../environments/environment';
import { MovieService } from './movie.service';
import { MovieDetail } from './../shared/interfaces/movie-detail';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss'],
})
export class MovieComponent implements OnInit {
  public loading = true;
  public movieDetail: MovieDetail;
  public id: string;
  private posterUrl: string = environment.posterUrl;
  private backdropUrl: string = environment.backdropUrl;
  private imdbUrl: string = environment.imdbUrl;

  @ViewChild(CastAndCrewComponent, { static: true }) castAndCrew: CastAndCrewComponent;
  @ViewChild(MovieTrailerComponent, { static: true }) movieTrailer: MovieTrailerComponent;

  constructor(
    private activatedRoute: ActivatedRoute,
    private movie: MovieService
  ) {}

  ngOnInit(): void {
    console.log('ngOnInit movie')
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
      }
    });
  }

  getDetails(): void {
    console.log('getDetails()');
    this.movie.getMovieDetail(this.id).subscribe((detail) => {
      if (Object.values(detail).length > 0) {
        this.movieDetail = detail;
      }
      this.loading = false;
    });
  }

  setPosterUrl(posterPath: string | null): string {
    return !posterPath
      ? 'null'
      : `${this.posterUrl}${posterPath}`;
  }

  isPosterUrl(posterPath: string | null) {
    return posterPath;
  }

  setBackdropUrl(backdropPath: string | null): string {
    return !backdropPath
      ? 'https://via.placeholder.com/600x450?text=No+image+available'
      : `${this.backdropUrl}${backdropPath}`;
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
