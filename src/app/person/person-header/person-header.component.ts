import { LocalStorageService } from './../../shared/services/local-storage.service';
import { PersonDetail } from './../../shared/interfaces/person-detail';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-person-header',
  templateUrl: './person-header.component.html',
  styleUrls: ['./person-header.component.scss'],
})
export class PersonHeaderComponent implements OnInit {
  @Input() personDetail: PersonDetail;

  private baseUrl: string;
  private profileSize: string;

  constructor(private localStorageService: LocalStorageService) {}

  ngOnInit(): void {
    this.getImageBases();
  }

  private getImageBases(): void {
    this.baseUrl = this.localStorageService.get('baseUrl');
    this.profileSize = this.localStorageService.get('profileSize');
  }

  public setHeaderProfile(backdropPath: string | null) {
    return {
      backgroundImage: `url(${this.setProfileUrl(
        this.personDetail.profile_path
      )})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    };
  }

  private setProfileUrl(profilePath: string | null): string {
    return !profilePath
      ? 'https://via.placeholder.com/600x450?text=No+profile+image+available'
      : `${this.baseUrl}${this.profileSize}${profilePath}`;
  }

  public hasAtLeastBirthOrDeathDay(
    birthday: string | null,
    deathday: string | null
  ): boolean {
    return birthday != null || deathday != null;
  }
}
