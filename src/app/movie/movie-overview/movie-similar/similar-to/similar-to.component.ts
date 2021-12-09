import { Component, Input, OnInit } from '@angular/core';
import { MovieListResult } from 'src/app/shared/interfaces/movie-list-result';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-similar-to',
  templateUrl: './similar-to.component.html',
  styleUrls: ['./similar-to.component.scss'],
})
export class SimilarToComponent implements OnInit {
  private posterUrl = environment.posterUrl;

  @Input() movie: MovieListResult;

  public backgroundDefaultProperties = {
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  };

  constructor() {}

  ngOnInit(): void {}

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
    return !posterPath ? 'null' : `${this.posterUrl}${this.movie.poster_path}`;
  }

  public isPosterUrl(posterPath: string | null) {
    return posterPath;
  }

  public setTitle(): string {
    let year = !this.isDateEmpty() ? new Date(this.movie.release_date).getFullYear() : 'No Release Date';

    return `${this.movie.title} (${year})`
  }

  public isDateEmpty(): boolean {
    return this.movie.release_date.length == 0;
  }
}
