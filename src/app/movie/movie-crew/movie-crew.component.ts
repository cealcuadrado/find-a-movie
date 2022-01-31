import { MovieDetail } from './../../shared/interfaces/movie-detail';
import { LocalStorageService } from './../../shared/services/local-storage.service';
import { Title } from '@angular/platform-browser';
import { MovieService } from './../movie.service';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { PersonLink } from './../../shared/interfaces/person-link';
import { Component, OnInit } from '@angular/core';
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

  public isCoDirected: boolean = false;
  public coDirection: PersonLink[] = [];

  public isBasedOnWork: boolean = false;
  public basedOnWorkAuthors: PersonLink[] = [];

  public isBasedOnCharacters: boolean = false;
  public basedOnCharacterAuthors: PersonLink[] = [];

  public isPresented: boolean = false;
  public presenters: PersonLink[] = [];

  public crewMembers: number = 0;

  private activatedRouteSubscription: Subscription | undefined;
  private movieCrewSubscription: Subscription;

  constructor(
    private activatedRoute: ActivatedRoute,
    private movie: MovieService,
    private titleService: Title,
    private localStorage: LocalStorageService
  ) {}

  ngOnInit(): void {
    this.initMovieCrew();
  }

  ngOnChanges(): void {
    this.initMovieCrew();
  }

  private initMovieCrew(): void {
    this.loading = true;
    this.setCrewView();
  }

  private setCrewView(): void {
    this.activatedRouteSubscription =
      this.activatedRoute.parent?.params.subscribe((params) => {
        if (params.id) {
          this.id = params.id;
          this.getCrew();
        }
      });
  }

  private getCrew(): void {
    this.movieCrewSubscription = this.movie
      .getCastAndCrew(this.id)
      .subscribe((result) => {
        this.crew = result.crew;
        this.setCrewContent();
        this.setWindowTitle();
      });
  }

  private setCrewContent(): void {
    this.getDirection();
    this.getCoDirection();
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
    this.getPresenters();
    this.loading = false;
  }

  private getDirection(): void {
    this.direction = this.crew
      .filter((member) => member.job === 'Director')
      .map((member) => {
        return { name: member.name, id: member.id };
      });
    this.crewMembers += this.direction.length;
  }

  private getCoDirection(): void {
    let coDirection = this.crew
      .filter((member) => member.job === 'Co-Director')
      .map((member) => {
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
      .filter((member) => member.job === 'Writer')
      .map((member) => {
        return { name: member.name, id: member.id };
      });
    this.crewMembers += this.writing.length;
  }

  private getScreenPlayers(): void {
    this.screenPlayers = this.crew
      .filter((member) => member.job === 'Screenplay')
      .map((member) => {
        return { name: member.name, id: member.id };
      });
    this.crewMembers += this.screenPlayers.length;
  }

  private getStoryPlayers(): void {
    this.storyPlayers = this.crew
      .filter((member) => member.job === 'Story')
      .map((member) => {
        return { name: member.name, id: member.id };
      });
    this.crewMembers += this.storyPlayers.length;
  }

  private getBasedOnWork(): void {
    let basedOnWorkAuthors = this.crew
      .filter((member) => {
        return member.job === 'Novel' || member.job === 'Author';
      })
      .map((member) => {
        return { name: member.name, id: member.id };
      });

    if (basedOnWorkAuthors.length > 0) {
      this.isBasedOnWork = true;
      this.basedOnWorkAuthors = basedOnWorkAuthors;
      this.crewMembers += this.basedOnWorkAuthors.length;
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
    this.producers = this.crew
      .filter((member) => member.job === 'Producer')
      .map((member) => {
        return { name: member.name, id: member.id };
      });
    this.crewMembers += this.producers.length;
  }

  private getExecutiveProducers(): void {
    this.executiveProducers = this.crew
      .filter((member) => member.job === 'Executive Producer')
      .map((member) => {
        return { name: member.name, id: member.id };
      });
    this.crewMembers += this.executiveProducers.length;
  }

  private getCinematographers(): void {
    this.cinematographers = this.crew
      .filter((member) => member.job === 'Director of Photography')
      .map((member) => {
        return { name: member.name, id: member.id };
      });
    this.crewMembers += this.cinematographers.length;
  }

  private getProductionDesigners(): void {
    this.productionDesigners = this.crew
      .filter((member) => member.job === 'Production Design')
      .map((member) => {
        return { name: member.name, id: member.id };
      });
    this.crewMembers += this.productionDesigners.length;
  }

  private getEditors(): void {
    this.editors = this.crew
      .filter((member) => member.job === 'Editor')
      .map((member) => {
        return { name: member.name, id: member.id };
      });
    this.crewMembers += this.editors.length;
  }

  private getCostumeDesigners(): void {
    this.costumeDesigners = this.crew
      .filter((member) => member.job === 'Costume Design')
      .map((member) => {
        return { name: member.name, id: member.id };
      });
    this.crewMembers += this.costumeDesigners.length;
  }

  private getMusicComposers(): void {
    this.musicComposers = this.crew
      .filter(
        (member) =>
          member.job === 'Original Music Composer' || member.job === 'Music'
      )
      .map((member) => {
        return { name: member.name, id: member.id };
      });
    this.crewMembers += this.musicComposers.length;
  }

  private getMusicSupervisors(): void {
    this.musicSupervisors = this.crew
      .filter((member) => member.job === 'Music Supervisor')
      .map((member) => {
        return { name: member.name, id: member.id };
      });
    this.crewMembers += this.musicSupervisors.length;
  }

  private getCoProducers(): void {
    this.coProducers = this.crew
      .filter((member) => member.job === 'Co-Producer')
      .map((member) => {
        return { name: member.name, id: member.id };
      });
    this.crewMembers += this.coProducers.length;
  }

  private getCastingPeople(): void {
    this.castingPeople = this.crew
      .filter((member) => member.job === 'Casting')
      .map((member) => {
        return { name: member.name, id: member.id };
      });
    this.crewMembers += this.castingPeople.length;
  }

  private getPresenters(): void {
    let presenters = this.crew
      .filter((member) => member.job === 'Presenter')
      .map((member) => {
        return { name: member.name, id: member.id };
      });

    if (presenters.length > 0) {
      this.isPresented = true;
      this.presenters = presenters;
      this.crewMembers += this.presenters.length;
    } else {
      this.isPresented = false;
    }
  }

  private setWindowTitle(): void {
    let detail = this.localStorage.get('currentMovie');
    let year = !this.isDateEmpty(detail)
      ? new Date(detail.release_date).getFullYear()
      : 'No Release Date';
    this.titleService.setTitle(
      `Crew of ${this.setLocalOrForeignTitle(detail)} (${year}) | Find a Movie`
    );
  }

  public isDateEmpty(detail: MovieDetail): boolean {
    return detail.release_date.length == 0;
  }

  private setLocalOrForeignTitle(detail: MovieDetail): string {
    return !detail.original_language.match('en') &&
      !detail.original_title.match(detail.title)
      ? `${detail.title} (${detail.original_title})`
      : detail.title;
  }

  ngOnDestroy() {
    this.activatedRouteSubscription?.unsubscribe();
    this.movieCrewSubscription.unsubscribe();
  }
}
