import { Cast } from 'src/app/shared/interfaces/cast';
import { MovieDetail } from './../../shared/interfaces/movie-detail';
import { Component, Input, OnInit } from '@angular/core';
import { Crew } from 'src/app/shared/interfaces/crew';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-movie-main',
  templateUrl: './movie-main.component.html',
  styleUrls: ['./movie-main.component.scss'],
})
export class MovieMainComponent implements OnInit {
  @Input() id: string;
  @Input() movieDetail: MovieDetail;
  @Input() cast: Cast[];
  @Input() crew: Crew[];

  private imdbUrl: string = environment.imdbUrl;

  constructor() {}

  ngOnInit(): void {}

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
