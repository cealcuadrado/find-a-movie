import { LocalStorageService } from './../shared/services/local-storage.service';
import { Subscription } from 'rxjs';
import { PersonService } from './person.service';
import { PersonDetail } from './../shared/interfaces/person-detail';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.scss'],
})
export class PersonComponent implements OnInit {
  public currentTab = 1;
  public id: string;

  public loadingView: boolean = true;
  public loadingPersonDetail: boolean = true;
  public loadingPersonCastCrew: boolean = true;

  public personDetail: PersonDetail;
  private backdropUrl: string = environment.backdropUrl;

  public personCastResults: number = 0;
  public personCrewResults: number = 0;

  public activatedRouteSubscription: Subscription;
  public tabSubscription: Subscription;
  public personDetailSubscription: Subscription;
  public personCastCrewSubscription: Subscription | undefined;

  constructor(
    private activatedRoute: ActivatedRoute,
    private person: PersonService,
    private titleService: Title,
    private window: Window,
    private localStorage: LocalStorageService
  ) {}

  ngOnInit(): void {
    this.initPerson();
  }

  ngOnChanges(): void {
    this.initPerson();
  }

  private initPerson(): void {
    this.loadingView = true;
    this.loadingPersonDetail = true;
    this.loadingPersonCastCrew = true;
    this.getPerson();
  }

  private setMainTab() {
    this.person.setCurrentTab(1);

    this.tabSubscription = this.person
      .getCurrentTab()
      .subscribe((currentTab) => {
        this.currentTab = currentTab;
        this.window.scrollTo({ top: 50 });
      });
  }

  private getPerson(): void {
    this.loadingView = false;
    this.activatedRouteSubscription = this.activatedRoute.params.subscribe(
      (params) => {
        if (params.id) {
          this.id = params.id;
          this.getPersonDetail();
        }
      }
    );
  }

  private getPersonDetail(): void {
    this.setMainTab();
    this.personDetailSubscription = this.person.getPerson(this.id).subscribe((person) => {
      if (Object.values(person).length > 0) {
        this.personDetail = person;
        this.getPersonCredits();
        this.setWindowTitle(true);
        this.localStorage.set('currentPerson', this.personDetail);
      } else {
        this.setWindowTitle(false);
        this.loadingPersonCastCrew = false;
      }
      this.loadingPersonDetail = false;
    });
  }

  private getPersonCredits(): void {
    this.personCastCrewSubscription = this.person
      .getMovieCredits(this.id)
      .subscribe((movieCredits) => {
        this.personCastResults = movieCredits.cast.length;
        this.personCrewResults = movieCredits.crew.length;
        this.loadingPersonCastCrew = false;
      });
  }

  private setWindowTitle(detail: boolean): void {
    let title = detail
      ? `${this.personDetail.name} Filmography`
      : 'No Person Found';
    this.titleService.setTitle(`${title} | Find a Movie`);
  }

  public setHeaderProfile(backdropPath: string | null) {
    return {
      backgroundImage: `url(${this.setProfileUrl(
        this.personDetail.profile_path
      )})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    };
  }

  private setProfileUrl(profilePath: string | null): string {
    return !profilePath
      ? 'https://via.placeholder.com/600x450?text=No+profile+image+available'
      : `${this.backdropUrl}${profilePath}`;
  }

  public hasAtLeastBirthOrDeathDay(
    birthday: string | null,
    deathday: string | null
  ): boolean {
    return birthday != null || deathday != null;
  }

  public loading(): boolean {
    return (
      this.loadingView ||
      this.loadingPersonCastCrew ||
      this.loadingPersonCastCrew
    );
  }

  ngOnDestroy() {
    this.activatedRouteSubscription.unsubscribe();
    this.tabSubscription.unsubscribe();
    this.personDetailSubscription.unsubscribe();
    this.personCastCrewSubscription?.unsubscribe();
    this.localStorage.remove('currentPerson');
  }
}
