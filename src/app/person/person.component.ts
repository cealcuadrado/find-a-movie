import { Subscription } from 'rxjs';
import { CastCredit } from './../shared/interfaces/cast-credit';
import { PersonService } from './person.service';
import { PersonDetail } from './../shared/interfaces/person-detail';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Title } from '@angular/platform-browser';
import { CrewCredit } from '../shared/interfaces/crew-credit';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.scss'],
})
export class PersonComponent implements OnInit {

  public currentTab = 1;
  public id: string;
  public loading = true;

  public personDetail: PersonDetail;
  private backdropUrl: string = environment.backdropUrl;

  public personCastCredits: CastCredit[];
  public personCrewCredits: CrewCredit[];

  public tabSubscription: Subscription;
  public personSubscription: Subscription;

  constructor(
    private activatedRoute: ActivatedRoute,
    private person: PersonService,
    private titleService: Title,
    private window: Window
  ) {}

  ngOnInit(): void {
    this.getPerson();
  }

  ngOnChanges(): void {
    this.loading = true;
    this.getPerson();
  }

  private setMainTab() {
    this.person.setCurrentTab(1);

    this.tabSubscription = this.person.getCurrentTab().subscribe(currentTab => {
      this.currentTab = currentTab;
      this.window.scrollTo({ top: 50 });
    });
  }

  private getPerson(): void {
    this.activatedRoute.params.subscribe((params) => {
      if (params.id) {
        this.id = params.id;
        this.getPersonDetail();
      }
    });
  }

  private getPersonDetail(): void {
    this.setMainTab();
    this.person.getPerson(this.id).subscribe((person) => {
      console.log(person);
      if (Object.values(person).length > 0) {
        this.personDetail = person;
        this.setTitle();
        this.getPersonCredits();
      }
      this.loading = false;
    });
  }

  private getPersonCredits(): void {
    this.personSubscription = this.person.getMovieCredits(this.id).subscribe(movieCredits => {
      console.log(movieCredits);
      this.personCastCredits = movieCredits.cast;
      this.personCrewCredits = movieCredits.crew;
    });
  }

  private setTitle(): void {
    this.titleService.setTitle(
      `${this.personDetail.name} Filmography | Find a Movie`
    );
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

  public hasAtLeastBirthOrDeathDay(birthday: string | null, deathday: string | null): boolean {
    return (birthday != null || deathday != null);
  }

  ngOnDestroy() {
    this.tabSubscription.unsubscribe();
    this.personSubscription.unsubscribe();
  }
}
