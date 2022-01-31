import { Component, Input, OnInit } from '@angular/core';
import { CrewCredit } from 'src/app/shared/interfaces/crew-credit';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-person-crew-result',
  templateUrl: './person-crew-result.component.html',
  styleUrls: ['./person-crew-result.component.scss'],
})
export class PersonCrewResultComponent implements OnInit {
  loading = true;
  posterUrl = environment.posterUrl;

  @Input() credit: CrewCredit;
  @Input() height: number = 300;

  backgroundDefaultSettings = {
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  };

  constructor() {}

  ngOnInit(): void {
    this.setCredits();
  }

  ngOnChanges(): void {
    this.setCredits();
  }

  public setCredits(): void {
    this.loading = false;
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

  public setBackgroundPoster(poster: string | null) {
    if (poster) {
      return {
        backgroundImage: `url(${this.posterUrl}${poster})`,
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
