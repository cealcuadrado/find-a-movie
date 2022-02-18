import { Component, Input, OnInit } from '@angular/core';
import { PersonListResult } from 'src/app/shared/interfaces/person-list-result';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-list-person-result',
  templateUrl: './list-person-result.component.html',
  styleUrls: ['./list-person-result.component.scss']
})
export class ListPersonResultComponent implements OnInit {

  @Input() personResult: PersonListResult;
  public backdropPath: string = environment.backdropUrl;

  public backdropDefaultSettings = {
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  };

  constructor() { }

  ngOnInit(): void {
  }

  public setProfileUrl() {
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
