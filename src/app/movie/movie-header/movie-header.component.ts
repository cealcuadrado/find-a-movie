import { environment } from 'src/environments/environment';
import { MovieDetail } from './../../shared/interfaces/movie-detail';
import { Component, Input, OnInit } from '@angular/core';
import { Crew } from 'src/app/shared/interfaces/crew';

@Component({
  selector: 'app-movie-header',
  templateUrl: './movie-header.component.html',
  styleUrls: ['./movie-header.component.scss'],
})
export class MovieHeaderComponent implements OnInit {
  public loading = true;

  @Input() movieDetail: MovieDetail;
  @Input() crew: Crew[] = [];

  public director: string | undefined;
  private posterUrl: string = environment.posterUrl;
  private backdropUrl: string = environment.backdropUrl;

  constructor() {}

  ngOnInit(): void {
    this.initMovieHeader();
  }

  ngOnChanges(): void {
    this.initMovieHeader();
  }

  public initMovieHeader(): void {
    this.loading = false;
    this.getDirector();
  }

  public setPosterUrl(posterPath: string | null) {
    return {
      backgroundImage: posterPath
        ? `url(${this.posterUrl}${posterPath})`
        : null,
    };
  }

  public isPosterUrl(posterPath: string | null) {
    return posterPath;
  }

  private setBackdropUrl(backdropPath: string | null): string {
    return !backdropPath
      ? 'https://via.placeholder.com/600x450?text=No+image+available'
      : `${this.backdropUrl}${backdropPath}`;
  }

  public setHeaderBackdrop(backdropPath: string | null) {
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

  private getDirector(): void {
    let directorArr: Crew[] = this.crew.filter(
      (member) => member.job === 'Director'
    );

    if (this.crew) {
      if (directorArr.length > 0) {
        this.director = directorArr[0].name;
      } else {
        this.director = undefined;
      }
    }
  }

  public zoomImage(): void {
    console.log('zoomImage()');
  }

  public isDateEmpty(dateStr: string): boolean {
    return dateStr.length == 0;
  }
}
