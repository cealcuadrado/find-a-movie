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

  public isCoDirected: boolean = false;
  public coDirection: PersonLink[] = [];

  public isBasedOnWork: boolean = false;
  public basedOnWork: PersonLink[];

  public isBasedOnCharacters: boolean = false;
  public basedOnCharacterAuthors: PersonLink[] = [];

  public castMembers: number = 0;
  public crewMembers: number = 0;

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
    this.getCoDirection();
    this.getWriting();
    this.getScreenplay();
    this.getStory();
    this.getProducers();
    this.getCast();
    this.getBasedOnWork();
    this.getBasedOnCharacters();
    this.loading = false;
  }

  private getDirection(): void {
    this.direction = this.crew
      .filter((member) => member.job == 'Director')
      .map((member) => {
        return { name: member.name, id: member.id };
      });

    this.crewMembers += this.direction.length;
  }

  private getCoDirection(): void {
    let coDirection = this.crew
      .filter(member => member.job === 'Co-Director')
      .map(member => {
        return { name: member.name, id: member.id };
      });

    if (coDirection.length > 0) {
      this.isCoDirected = true;
      this.coDirection = coDirection;
      this.crewMembers += this.coDirection.length;
    } else {
      this.isCoDirected = false;
    }
  }

  private getWriting(): void {
    this.writing = this.crew
      .filter((member) => member.job == 'Writer')
      .map((member) => {
        return { name: member.name, id: member.id };
      });

    this.crewMembers += this.writing.length;
  }

  private getScreenplay(): void {
    this.screenPlayers = this.crew
      .filter((member) => member.job == 'Screenplay')
      .map((member) => {
        return { name: member.name, id: member.id };
      });

    this.crewMembers += this.screenPlayers.length;
  }

  private getStory(): void {
    this.story = this.crew
      .filter((member) => member.job == 'Story')
      .map((member) => {
        return { name: member.name, id: member.id };
      });

    this.crewMembers += this.story.length;
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
      this.crewMembers += this.basedOnWork.length;
    } else {
      this.isBasedOnWork = false;
    }
  }

  private getBasedOnCharacters(): void {
    let basedOnCharacterAuthors = this.crew
      .filter((member) => member.job === 'Characters')
      .map((member) => {
        return { name: member.name, id: member.id };
      });

    if (basedOnCharacterAuthors.length > 0) {
      this.isBasedOnCharacters = true;
      this.basedOnCharacterAuthors = basedOnCharacterAuthors;
      this.crewMembers += this.basedOnCharacterAuthors.length;
    } else {
      this.isBasedOnCharacters = false;
    }
  }

  private getProducers(): void {
    this.production = this.crew
      .filter((member) => member.job == 'Producer')
      .map((member) => {
        return { name: member.name, id: member.id };
      });

    this.crewMembers += this.production.length;
  }

  private getCast(): void {
    this.movieCast = this.cast.slice(0, 7).map((member) => {
      return { name: member.name, id: member.id };
    });

    this.castMembers = this.movieCast.length;
  }
}
