import { Component, Input, OnInit } from '@angular/core';
import { MovieDetail } from 'src/app/shared/interfaces/movie-detail';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-header-poster',
  templateUrl: './header-poster.component.html',
  styleUrls: ['./header-poster.component.scss'],
})
export class HeaderPosterComponent implements OnInit {
  @Input() movieDetail: MovieDetail;
  private posterUrl: string = environment.posterUrl;
  private backdropUrl: string = environment.backdropUrl;

  constructor() {}

  ngOnInit(): void {
  }

  public isPosterUrl(posterPath: string | null) {
    return posterPath;
  }

  public setPosterUrl(posterPath: string | null) {
    return {
      backgroundImage: posterPath
        ? `url(${this.posterUrl}${posterPath})`
        : null,
    };
  }

  private setBackdropUrl(backdropPath: string | null): string {
    return !backdropPath
      ? 'https://via.placeholder.com/600x450?text=No+image+available'
      : `${this.backdropUrl}${backdropPath}`;
  }

  private setLocalOrForeignTitle(detail: MovieDetail): string {
    return !detail.original_language.match('en') &&
      !detail.original_title.match(detail.title)
      ? `${detail.title} (${detail.original_title})`
      : detail.title;
  }

  public isDateEmpty(dateStr: string): boolean {
    return dateStr.length == 0;
  }
}
