import { Component, Input, OnInit } from '@angular/core';
import { PersonListResult } from 'src/app/shared/interfaces/person-list-result';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-grid-person-result',
  templateUrl: './grid-person-result.component.html',
  styleUrls: ['./grid-person-result.component.scss']
})
export class GridPersonResultComponent implements OnInit {

  @Input() personResult: PersonListResult;
  public backdropPath: string = environment.backdropUrl;

  public backdropDefaultSettings = {
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  };

  constructor() { }

  ngOnInit(): void {
  }

  public setPosterUrl() {
    if (this.isPosterUrl(this.personResult.profile_path)) {
      return {
        backgroundImage: `url(${this.backdropPath}${this.personResult.profile_path})`,
        ...this.backdropDefaultSettings,
      };
    } else {
      return {};
    }
  }

  public isPosterUrl(posterPath: string | null) {
    return posterPath;
  }

}
