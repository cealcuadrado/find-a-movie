import { environment } from 'src/environments/environment';
import { MovieListResult } from 'src/app/shared/interfaces/movie-list-result';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-grid-movie-result',
  templateUrl: './grid-movie-result.component.html',
  styleUrls: ['./grid-movie-result.component.scss'],
})
export class GridMovieResultComponent implements OnInit {
  
  @Input() searchResult: MovieListResult;
  private posterUrl: string = environment.posterUrl;

  date: Date;

  backgroundDefaultProperties = {
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  };

  constructor() {}

  ngOnInit(): void {
    this.date = new Date(this.searchResult.release_date);
  }

  public setPoster() {
    if (this.isPosterUrl(this.searchResult.poster_path)) {
      return {
        backgroundImage: `url(${this.setPosterUrl(
          this.searchResult.poster_path
        )})`,
        ...this.backgroundDefaultProperties,
      };
    } else {
      return {};
    }
  }

  public setPosterUrl(posterPath: string | null) {
    return !posterPath
      ? 'null'
      : `${this.posterUrl}${this.searchResult.poster_path}`;
  }

  public isPosterUrl(posterPath: string | null) {
    return posterPath;
  }

  public setTitleAndYear(): string {
    return `${this.setLocalOrForeignTitle()} (${this.setYear()})`;
  }

  public setLocalOrForeignTitle(): string {
    return !this.searchResult.original_language.match('en') &&
      !this.searchResult.original_title.match(this.searchResult.title)
      ? `${this.searchResult.title} (${this.searchResult.original_title})`
      : this.searchResult.title;
  }

  public isDateEmpty(dateStr: string): boolean {
    return dateStr.length == 0;
  }

  public setYear(): number | string {
    if (this.searchResult.release_date) {
      if (this.searchResult.release_date.length > 0) {
        return this.date.getFullYear();
      } else {
        return 'No release date';
      }
    } else {
      return 'No release date';
    }
  }
}
