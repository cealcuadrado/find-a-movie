import { LocalStorageService } from './../../../shared/services/local-storage.service';
import { Component, Input, OnInit } from '@angular/core';
import { MovieDetail } from 'src/app/shared/interfaces/movie-detail';

@Component({
  selector: 'app-header-poster',
  templateUrl: './header-poster.component.html',
  styleUrls: ['./header-poster.component.scss'],
})
export class HeaderPosterComponent implements OnInit {
  @Input() movieDetail: MovieDetail;

  private baseUrl: string;
  private posterSize: string;
  private originalPosterSize: string;

  constructor(
    private localStorageService: LocalStorageService
  ) {}

  ngOnInit(): void {
    this.getImageBases();
  }

  private getImageBases(): void {
    this.baseUrl = this.localStorageService.get('baseUrl');
    this.posterSize = this.localStorageService.get('posterSize');
    this.originalPosterSize = this.localStorageService.get('originalPosterSize');
  }

  public isPosterUrl(posterPath: string | null) {
    return posterPath;
  }

  public setPosterBg(posterPath: string | null) {
    return {
      backgroundImage: posterPath
        ? `url(${this.baseUrl}${this.posterSize}${posterPath})`
        : null,
    };
  }

  public setPosterUrl(posterPath: string | null): string {
    return posterPath ? `${this.baseUrl}${this.originalPosterSize}${posterPath}` : '';
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
