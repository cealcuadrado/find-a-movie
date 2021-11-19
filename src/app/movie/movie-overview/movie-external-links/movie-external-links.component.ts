import { MovieDetail } from '../../../shared/interfaces/movie-detail';
import { Component, Input, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-movie-external-links',
  templateUrl: './movie-external-links.component.html',
  styleUrls: ['./movie-external-links.component.scss'],
})
export class MovieExternalLinksComponent implements OnInit {
  @Input() movieDetail: MovieDetail;
  @Input() id: string;

  public loading: boolean = true;

  private imdbUrl: string = environment.imdbUrl;

  constructor() {}

  ngOnInit(): void {
    this.loading = false;
  }

  setImdbUrl(imdbId: string): string {
    return `${this.imdbUrl}${imdbId}`;
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
