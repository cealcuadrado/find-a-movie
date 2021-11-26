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

  isCharacterDefined(characterName: string | null): boolean {
    return characterName != null && characterName.length > 0;
  }
}
