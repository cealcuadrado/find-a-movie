import { LocalStorageService } from './../../../shared/services/local-storage.service';
import { Component, Input, OnInit } from '@angular/core';
import { MovieListResult } from 'src/app/shared/interfaces/movie-list-result';

@Component({
  selector: 'app-similar-to',
  templateUrl: './similar-to.component.html',
  styleUrls: ['./similar-to.component.scss'],
})
export class SimilarToComponent implements OnInit {

  @Input() movie: MovieListResult;

  private baseUrl: string;
  private posterSize: string;

  public backgroundDefaultProperties = {
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  };

  constructor(private localStorageService: LocalStorageService) {}

  ngOnInit(): void {
    this.setImageBases();
  }

  private setImageBases(): void {
    this.baseUrl = this.localStorageService.get('baseUrl');
    this.posterSize = this.localStorageService.get('posterSize');
  }

  public setPoster() {
    if (this.isPosterUrl(this.movie.poster_path)) {
      return {
        backgroundImage: `url(${this.setPosterUrl(this.movie.poster_path)})`,
        ...this.backgroundDefaultProperties,
      };
    } else {
      return {};
    }
  }

  public setPosterUrl(posterPath: string | null) {
    return !posterPath ? 'null' : `${this.baseUrl}${this.posterSize}${this.movie.poster_path}`;
  }

  public isPosterUrl(posterPath: string | null) {
    return posterPath;
  }

  public setTitle(): string {
    let year = !this.isDateEmpty()
      ? new Date(this.movie.release_date).getFullYear()
      : 'No Release Date';

    return `${this.setLocalOrForeignTitle()} (${year})`;
  }

  public isDateEmpty(): boolean {
    return this.movie.release_date.length == 0;
  }

  public setLocalOrForeignTitle(): string {
    return !this.movie.original_language.match('en') &&
      !this.movie.original_title.match(this.movie.title)
      ? `${this.movie.title} (${this.movie.original_title})`
      : this.movie.title;
  }
}
