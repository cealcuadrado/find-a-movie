import { PersonListResult } from 'src/app/shared/interfaces/person-list-result';
import { Component, Input, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-person-result',
  templateUrl: './person-result.component.html',
  styleUrls: ['./person-result.component.scss'],
})
export class PersonResultComponent implements OnInit {
  @Input() personResult: PersonListResult;
  public backdropPath: string = environment.backdropUrl;

  public backdropDefaultSettings = {
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  };

  constructor() {}

  public setPosterUrl(profilePath: string | null) {
    if (this.isPosterUrl(profilePath)) {
      return {
        backgroundImage: `url(${this.backdropPath}${profilePath})`,
        ...this.backdropDefaultSettings
      }
    } else {
      return {}
    }

    /*
    return !posterPath
      ? 'null'
      : `${this.posterUrl}${this.searchResult.poster_path}`;
    */
  }

  public isPosterUrl(posterPath: string | null) {
    return posterPath;
  }

  ngOnInit(): void {}
}
