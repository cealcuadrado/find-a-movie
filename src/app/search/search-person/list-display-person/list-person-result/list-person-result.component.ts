import { LocalStorageService } from './../../../../shared/services/local-storage.service';
import { Component, Input, OnInit } from '@angular/core';
import { PersonListResult } from 'src/app/shared/interfaces/person-list-result';

@Component({
  selector: 'app-list-person-result',
  templateUrl: './list-person-result.component.html',
  styleUrls: ['./list-person-result.component.scss']
})
export class ListPersonResultComponent implements OnInit {

  @Input() personResult: PersonListResult;

  private baseUrl: string;
  private profileSize: string;

  public backdropDefaultSettings = {
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  };

  constructor(
    private localStorageService: LocalStorageService
  ) { }

  ngOnInit(): void {
    this.initListPersonResult();
  }

  private initListPersonResult(): void {
    this.setImageBases();
  }

  private setImageBases(): void {
    this.baseUrl = this.localStorageService.get('baseUrl');
    this.profileSize = this.localStorageService.get('profileSize');
  }

  public setProfile() {
    if (this.isPosterUrl(this.personResult.profile_path)) {
      return {
        backgroundImage: `url(${this.setProfileUrl(this.personResult.profile_path)})`,
        ...this.backdropDefaultSettings,
      };
    } else {
      return {};
    }
  }

  private setProfileUrl(posterPath: string | null) {
    return posterPath ? `${this.baseUrl}${this.profileSize}${posterPath}` : '';
  }

  public isPosterUrl(posterPath: string | null) {
    return posterPath;
  }
}
