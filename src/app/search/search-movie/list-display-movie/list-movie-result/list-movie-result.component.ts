import { LocalStorageService } from './../../../../shared/services/local-storage.service';
import { MovieListResult } from 'src/app/shared/interfaces/movie-list-result';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-movie-result',
  templateUrl: './list-movie-result.component.html',
  styleUrls: ['./list-movie-result.component.scss'],
})
export class ListMovieResultComponent implements OnInit {
  
  @Input() searchResult: MovieListResult;

  baseUrl: string;
  posterSize: string;

  date: Date;

  backgroundDefaultProperties = {
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  };

  constructor(
    private localStorageService: LocalStorageService
  ) {}

  ngOnInit(): void {
    this.initListMovieResult();
  }

  private initListMovieResult(): void {
    this.date = new Date(this.searchResult.release_date);
    this.setImageBases();
  }

  private setImageBases(): void {
    this.baseUrl = this.localStorageService.get('baseUrl');
    this.posterSize = this.localStorageService.get('posterSize');
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

  private setPosterUrl(posterPath: string | null) {
    return !posterPath
      ? 'null'
      : `${this.baseUrl}${this.posterSize}${this.searchResult.poster_path}`;
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
