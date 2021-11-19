import { PersonLink } from '../../../shared/interfaces/person-link';
import { Cast } from '../../../shared/interfaces/cast';
import { Component, Input, OnInit } from '@angular/core';
import { Crew } from 'src/app/shared/interfaces/crew';

@Component({
  selector: 'app-cast-and-crew-summary',
  templateUrl: './cast-and-crew-summary.component.html',
  styleUrls: ['./cast-and-crew-summary.component.scss'],
})
export class CastAndCrewSummaryComponent implements OnInit {
  
  public loading: boolean = true;

  @Input() cast: Cast[] = [];
  @Input() crew: Crew[] = [];

  public direction: PersonLink[] = [];
  public writing: PersonLink[] = [];
  public screenPlayers: PersonLink[] = [];
  public story: PersonLink[] = [];
  public production: PersonLink[] = [];
  public movieCast: PersonLink[] = [];

  public isBasedOnWork: boolean = false;
  public basedOnWork: PersonLink[];

  constructor() {}

  ngOnInit(): void {
    this.setCastAndCrew();
  }

  ngOnChanges(): void {
    this.loading = true;
    this.setCastAndCrew();
  }

  private setCastAndCrew(): void {
    this.getDirection();
    this.getWriting();
    this.getScreenplay();
    this.getStory();
    this.getProducers();
    this.getCast();
    this.getBasedOnWork();
    this.loading = false;
  }

  private getDirection(): void {
    this.direction = this.crew
      .filter((member) => member.job == 'Director')
      .map((member) => {
        return { name: member.name, id: member.id };
      });
  }

  private getWriting(): void {
    this.writing = this.crew
      .filter((member) => member.job == 'Writer')
      .map((member) => {
        return { name: member.name, id: member.id };
      });
  }

  private getScreenplay(): void {
    this.screenPlayers = this.crew
      .filter((member) => member.job == 'Screenplay')
      .map((member) => {
        return { name: member.name, id: member.id };
      });
  }

  private getStory(): void {
    this.story = this.crew
      .filter((member) => member.job == 'Story')
      .map((member) => {
        return { name: member.name, id: member.id };
      });
  }

  private getBasedOnWork(): void {
    let basedOnWorkOf = this.crew
      .filter((member) => {
        return member.job === 'Novel' || member.job === 'Author';
      })
      .map((member) => {
        return { name: member.name, id: member.id };
      });

    if (basedOnWorkOf.length > 0) {
      this.isBasedOnWork = true;
      this.basedOnWork = basedOnWorkOf;
    } else {
      this.isBasedOnWork = false;
    }
  }

  private getProducers(): void {
    this.production = this.crew
      .filter((member) => member.job == 'Producer')
      .map((member) => {
        return { name: member.name, id: member.id };
      });
  }

  private getCast(): void {
    this.movieCast = this.cast.slice(0, 7).map((member) => {
      return { name: member.name, id: member.id };
    });
  }

  private atLeastItsOneField(): boolean {
    return (
      !this.direction &&
      !this.writing &&
      !this.screenPlayers &&
      !this.story &&
      !this.isBasedOnWork &&
      !this.production &&
      !this.movieCast
    );
  }
}
