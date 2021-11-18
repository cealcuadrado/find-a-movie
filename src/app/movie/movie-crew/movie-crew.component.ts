import { PersonLink } from './../../shared/interfaces/person-link';
import { Component, Input, OnInit } from '@angular/core';
import { Crew } from 'src/app/shared/interfaces/crew';
import { MergeMapSubscriber } from 'rxjs/internal/operators/mergeMap';

@Component({
  selector: 'app-movie-crew',
  templateUrl: './movie-crew.component.html',
  styleUrls: ['./movie-crew.component.scss'],
})
export class MovieCrewComponent implements OnInit {
  public loading: boolean = true;

  @Input() crew: Crew[] = [];

  public direction: PersonLink[] = [];
  public writing: PersonLink[] = [];
  public screenPlayers: PersonLink[] = [];
  public storyPlayers: PersonLink[] = [];
  public producers: PersonLink[] = [];
  public executiveProducers: PersonLink[] = [];
  public cinematographers: PersonLink[] = [];
  public productionDesigners: PersonLink[] = [];

  public isBasedOnWork: boolean = false;
  public basedOnWorkAuthors: PersonLink[] = [];

  constructor() {}

  ngOnInit(): void {
    this.setCrew();
  }

  setCrew(): void {
    this.loading = false;
    this.getDirection();
    this.getWriting();
    this.getScreenPlayers();
    this.getStoryPlayers();
    this.getBasedOnWork();
    this.getProducers();
    this.getExecutiveProducers();
    this.getCinematographers();
    this.getProductionDesigners();
  }

  private getDirection(): void {
    this.direction = this.crew
      .filter(member => member.job == 'Director')
      .map(member => {
        return { name: member.name, id: member.id };
      });
  }

  private getWriting(): void {
    this.writing = this.crew
      .filter(member => member.job === 'Writer')
      .map(member => {
        return { name: member.name, id: member.id };
      });
  }

  private getScreenPlayers(): void {
    this.screenPlayers = this.crew
      .filter(member => member.job === 'Screenplay')
      .map(member => {
        return { name: member.name, id: member.id };
      });
  }

  private getStoryPlayers(): void {
    this.storyPlayers = this.crew
      .filter(member => member.job === 'Story')
      .map(member => {
        return { name: member.name, id: member.id };
      });
  }

  private getBasedOnWork(): void {
    let basedOnWorkAuthors = this.crew
      .filter(member => {
        return member.job === 'Novel' || member.job === 'Author';
      })
      .map(member => {
        return { name: member.name, id: member.id };
      });

    if (basedOnWorkAuthors.length > 0) {
      this.isBasedOnWork = true;
      this.basedOnWorkAuthors = basedOnWorkAuthors;
    } else {
      this.isBasedOnWork = false;
    }
  }

  private getProducers(): void {
    this.producers = this.crew
      .filter(member => member.job === 'Producer')
      .map(member => {
        return { name: member.name, id: member.id };
      });
  }

  private getExecutiveProducers(): void {
    this.executiveProducers = this.crew
      .filter(member => member.job === 'Executive Producer')
      .map(member => {
        return { name: member.name, id: member.id };
      });
  }

  private getCinematographers(): void {
    this.cinematographers = this.crew
      .filter(member => member.job === 'Director of Photography')
      .map(member => {
        return { name: member.name, id: member.id }
      });
  }

  private getProductionDesigners(): void {
    this.productionDesigners = this.crew
      .filter(member => member.job === 'Production Design')
      .map(member => {
        return { name: member.name, id: member.id}
      });
  }
}
