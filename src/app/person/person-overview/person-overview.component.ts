import { CastCredit } from './../../shared/interfaces/cast-credit';
import { PersonDetail } from './../../shared/interfaces/person-detail';
import { Component, Input, OnInit } from '@angular/core';
import { CrewCredit } from 'src/app/shared/interfaces/crew-credit';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-person-overview',
  templateUrl: './person-overview.component.html',
  styleUrls: ['./person-overview.component.scss']
})
export class PersonOverviewComponent implements OnInit {

  loading = true;
  posterUrl = environment.posterUrl;

  @Input() personDetail: PersonDetail;
  @Input() castCredits: CastCredit[];
  @Input() crewCredits: CrewCredit[];

  backgroundDefaultSettings = {
    backgroundSize: 'cover',
    backgroundPosition: 'center'
  };

  constructor() { }

  ngOnInit(): void {
    this.setCastAndCrew();
  }

  ngOnChanges(): void {
    this.setCastAndCrew();
  }

  public setCastAndCrew(): void {
    this.loading = false;
    this.castCredits = this.castCredits.splice(0, 4);
    this.crewCredits = this.crewCredits.splice(0, 4);
  }

  public hasPosterPath(path: string | null): boolean {
    return (path != null) ? true : false;
  }

  public setBackgroundPoster(poster: string | null) {
    if (poster) {
      return {
        backgroundImage: `url(${this.posterUrl}${poster})`,
        ...this.backgroundDefaultSettings
      }
    } else {
      return this.backgroundDefaultSettings;
    }
  }

  public setPosterUrl(url: string): string {
    return url;
  }


}
