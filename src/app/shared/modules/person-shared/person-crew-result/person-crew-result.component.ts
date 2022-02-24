import { LocalStorageService } from './../../../services/local-storage.service';
import { Component, Input, OnInit } from '@angular/core';
import { CrewCredit } from 'src/app/shared/interfaces/crew-credit';

@Component({
  selector: 'app-person-crew-result',
  templateUrl: './person-crew-result.component.html',
  styleUrls: ['./person-crew-result.component.scss'],
})
export class PersonCrewResultComponent implements OnInit {
  loading = true;

  baseUrl: string;
  posterSize: string;

  @Input() credit: CrewCredit;
  @Input() height: number = 300;

  backgroundDefaultSettings = {
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  };

  constructor(
    private localStorageService: LocalStorageService
  ) {}

  ngOnInit(): void {
    this.initPersonCrew();
  }

  ngOnChanges(): void {
    this.initPersonCrew();
  }

  private initPersonCrew(): void {
    this.setCredits();
    this.getImageBases();
  }

  private setCredits(): void {
    this.loading = false;
  }

  private getImageBases(): void {
    this.baseUrl = this.localStorageService.get('baseUrl');
    this.posterSize = this.localStorageService.get('posterSize');
  }

  public hasPosterPath(path: string | null): boolean {
    return path != null ? true : false;
  }

  public setStyle(poster: string | null) {
    return {
      height: `${this.height}px`,
      ...this.setBackgroundPoster(poster),
    };
  }

  public setBackgroundPoster(posterPath: string | null) {
    if (posterPath) {
      return {
        backgroundImage: `url(${this.baseUrl}${this.posterSize}${posterPath})`,
        ...this.backgroundDefaultSettings,
      };
    } else {
      return this.backgroundDefaultSettings;
    }
  }

  public setPosterUrl(url: string): string {
    return url;
  }

  public isRoleDefined(): boolean {
    return this.credit.job != null && this.credit.job.length > 0;
  }

  public setTitle(): string {
    let year: number | string = !this.isDateEmpty()
      ? new Date(this.credit.release_date).getFullYear()
      : 'No Release Date';
    let setRole = this.isRoleDefined() ? this.credit.job : 'No Role Specified';
    return `${setRole} in "${this.setLocalOrForeignTitle(this.credit)}" (${year})`;
  }

  public setLocalOrForeignTitle(credit: CrewCredit): string {
    return !this.credit.original_language.match('en') &&
      !this.credit.original_title.match(this.credit.title)
      ? `${this.credit.title} (${this.credit.original_title})`
      : this.credit.title;
  }

  public isDateEmpty(): boolean {
    return (
      this.credit.release_date == (undefined || null) ||
      this.credit.release_date.length == 0
    );
  }
}
