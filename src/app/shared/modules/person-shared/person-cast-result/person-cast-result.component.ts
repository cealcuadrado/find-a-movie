import { CastCredit } from './../../../interfaces/cast-credit';
import { Component, Input, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-person-cast-result',
  templateUrl: './person-cast-result.component.html',
  styleUrls: ['./person-cast-result.component.scss'],
})
export class PersonCastResultComponent implements OnInit {
  loading = true;
  posterUrl = environment.posterUrl;

  constructor() {}

  @Input() credit: CastCredit;
  @Input() height: number = 300;

  backgroundDefaultSettings = {
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  };

  ngOnInit(): void {
    this.setCredits();
  }

  ngOnChanges(): void {
    this.setCredits();
  }

  setCredits(): void {
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

  public isCharacterDefined(characterName: string | null): boolean {
    return characterName != null && characterName.length > 0;
  }

  public setTitle(): string {
    let year: number | string = !this.isDateEmpty()
      ? new Date(this.credit.release_date).getFullYear()
      : 'No Release Date';
    let setCharacter = this.isCharacterDefined(this.credit.character)
      ? this.credit.character
      : 'No Character Specified';
    return `${setCharacter} in "${this.setLocalOrForeignTitle(this.credit)}" (${year})`;
  }

  public setLocalOrForeignTitle(credit: CastCredit): string {
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
