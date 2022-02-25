import { LocalStorageService } from './../../../../shared/services/local-storage.service';
import { Component, Input, OnInit } from '@angular/core';
import { PersonListResult } from 'src/app/shared/interfaces/person-list-result';

@Component({
  selector: 'app-grid-person-result',
  templateUrl: './grid-person-result.component.html',
  styleUrls: ['./grid-person-result.component.scss']
})
export class GridPersonResultComponent implements OnInit {

  @Input() personResult: PersonListResult;

  baseUrl: string;
  profileSize: string;

  public backdropDefaultSettings = {
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  };

  constructor(
    private localStorageService: LocalStorageService
  ) { }

  ngOnInit(): void {
    this.setImageBases();
  }

  private setImageBases(): void {
    this.baseUrl = this.localStorageService.get('baseUrl');
    this.profileSize = this.localStorageService.get('profileSize');
  }

  public setPoster() {
    if (this.isPosterUrl(this.personResult.profile_path)) {
      return {
        backgroundImage: `url(${this.setPosterUrl(this.personResult.profile_path)})`,
        ...this.backdropDefaultSettings,
      };
    } else {
      return {};
    }
  }

  private setPosterUrl(posterPath: string | null): string {
    return posterPath ? `${this.baseUrl}${this.profileSize}${posterPath}` : '';
  }

  public isPosterUrl(posterPath: string | null) {
    return posterPath;
  }
}
