import { Title } from '@angular/platform-browser';
import { MovieService } from './../movie.service';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { PersonLink } from './../../shared/interfaces/person-link';
import { Component, Input, OnInit } from '@angular/core';
import { Crew } from 'src/app/shared/interfaces/crew';

@Component({
  selector: 'app-movie-crew',
  templateUrl: './movie-crew.component.html',
  styleUrls: ['./movie-crew.component.scss'],
})
export class MovieCrewComponent implements OnInit {
  public loading: boolean = true;

  public id: string;
  public crew: Crew[] = [];

  public direction: PersonLink[] = [];
  public writing: PersonLink[] = [];
  public screenPlayers: PersonLink[] = [];
  public storyPlayers: PersonLink[] = [];
  public producers: PersonLink[] = [];
  public executiveProducers: PersonLink[] = [];
  public cinematographers: PersonLink[] = [];
  public productionDesigners: PersonLink[] = [];
  public editors: PersonLink[] = [];
  public costumeDesigners: PersonLink[] = [];
  public musicComposers: PersonLink[] = [];
  public musicSupervisors: PersonLink[] = [];
  public coProducers: PersonLink[] = [];
  public castingPeople: PersonLink[] = [];

  public isBasedOnWork: boolean = false;
  public basedOnWorkAuthors: PersonLink[] = [];

  public isBasedOnCharacters: boolean = false;
  public basedOnCharacterAuthors: PersonLink[] = [];

  private activatedRouteSubscription: Subscription | undefined;
  private movieCrewSubscription: Subscription;

  constructor(
    private activatedRoute: ActivatedRoute,
    private movie: MovieService,
    private titleService: Title
  ) {}

  ngOnInit(): void {
    this.setCrewView();
  }

  ngOnChanges(): void {
    this.setCrewView();
  }

  private setCrewView(): void {
    this.activatedRouteSubscription = this.activatedRoute.parent?.params.subscribe(params => {
      if (params.id) {
        this.id = params.id;
        this.getCrew();
      }
    });
  }

  private getCrew(): void {
    this.movieCrewSubscription = this.movie.getCastAndCrew(this.id).subscribe(result => {
      this.crew = result.crew;
      this.setCrewContent();
    });
  }

  private setCrewContent(): void {
    this.getDirection();
    this.getWriting();
    this.getScreenPlayers();
    this.getStoryPlayers();
    this.getBasedOnWork();
    this.getBasedOnCharacters();
    this.getProducers();
    this.getExecutiveProducers();
    this.getCinematographers();
    this.getProductionDesigners();
    this.getEditors();
    this.getCostumeDesigners();
    this.getMusicComposers();
    this.getMusicSupervisors();
    this.getCoProducers();
    this.getCastingPeople();
    this.loading = false;
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

  private getBasedOnCharacters(): void {
    let basedOnCharacterAuthors = this.crew
      .filter(member => member.job === 'Characters')
      .map(member => {
        return { name: member.name, id: member.id };
      });

    if (basedOnCharacterAuthors.length > 0) {
      this.isBasedOnCharacters = true;
      this.basedOnCharacterAuthors = basedOnCharacterAuthors;
    } else {
      this.isBasedOnCharacters = false;
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
        return { name: member.name, id: member.id };
      });
  }

  private getProductionDesigners(): void {
    this.productionDesigners = this.crew
      .filter(member => member.job === 'Production Design')
      .map(member => {
        return { name: member.name, id: member.id };
      });
  }

  private getEditors(): void {
    this.editors = this.crew
      .filter(member => member.job === 'Editor')
      .map(member => {
        return { name: member.name, id: member.id };
      });
  }

  private getCostumeDesigners(): void {
    this.costumeDesigners = this.crew
      .filter(member => member.job === 'Costume Design')
      .map(member => {
        return { name: member.name, id: member.id };
      });
  }

  private getMusicComposers(): void {
    this.musicComposers = this.crew
      .filter(member => member.job === 'Original Music Composer' || member.job === 'Music')
      .map(member => {
        return { name: member.name, id: member.id };
      });
  }

  private getMusicSupervisors(): void {
    this.musicSupervisors = this.crew
      .filter(member => member.job === 'Music Supervisor')
      .map(member => {
        return { name: member.name, id: member.id };
      });
  }

  private getCoProducers(): void {
    this.coProducers = this.crew
      .filter(member => member.job === 'Co-Producer')
      .map(member => {
        return { name: member.name, id: member.id };
      });
  }

  private getCastingPeople(): void {
    this.castingPeople = this.crew
      .filter(member => member.job === 'Casting')
      .map(member => {
        return { name: member.name, id: member.id };
      });
  }

  ngOnDestroy() {
    this.activatedRouteSubscription?.unsubscribe();
    this.movieCrewSubscription.unsubscribe();
  }
}
