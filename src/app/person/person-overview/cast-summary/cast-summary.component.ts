import { environment } from './../../../../environments/environment';
import { CastCredit } from './../../../shared/interfaces/cast-credit';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-cast-summary',
  templateUrl: './cast-summary.component.html',
  styleUrls: ['./cast-summary.component.scss'],
})
export class CastSummaryComponent implements OnInit {
  loading: false;
  posterUrl = environment.posterUrl;

  @Input() castCredits: CastCredit[] = [];

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
}
