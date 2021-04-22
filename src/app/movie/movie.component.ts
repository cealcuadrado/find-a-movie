import { environment } from './../../environments/environment';
import { MovieService } from './movie.service';
import { MovieDetail } from './../shared/interfaces/movie-detail';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss'],
})
export class MovieComponent implements OnInit {
  public movieDetail: MovieDetail;
  public id: string;
  private posterUrl: string = environment.posterUrl;
  private backdropUrl: string = environment.backdropUrl;
  private imdbUrl: string = environment.imdbUrl;

  constructor(
    private activatedRoute: ActivatedRoute,
    private movie: MovieService
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      this.id = params.id;
      this.getDetails();
    });
  }

  getDetails(): void {
    this.movie.getMovieDetail(this.id).subscribe((detail) => {
      console.log(detail);
      this.movieDetail = detail;
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
