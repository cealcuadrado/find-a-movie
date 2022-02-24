import { LocalStorageService } from './../../../../shared/services/local-storage.service';
import { MovieListResult } from './../../../../shared/interfaces/movie-list-result';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-overview-similar-to',
  templateUrl: './overview-similar-to.component.html',
  styleUrls: ['./overview-similar-to.component.scss'],
})
export class OverviewSimilarToComponent implements OnInit {
  @Input() movie: MovieListResult;

  private baseUrl: string;
  private posterSize: string;

  public backgroundDefaultProperties = {
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  };

  constructor(
    private localStorageService: LocalStorageService
  ) {}

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

    return `${this.movie.title} (${year})`;
  }

  public isDateEmpty(): boolean {
    return this.movie.release_date.length == 0;
  }
}
