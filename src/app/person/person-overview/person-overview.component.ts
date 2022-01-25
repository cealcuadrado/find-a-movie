import { Subscription } from 'rxjs';
import { Title } from '@angular/platform-browser';
import { PersonService } from './../person.service';
import { ActivatedRoute } from '@angular/router';
import { CastCredit } from './../../shared/interfaces/cast-credit';
import { PersonDetail } from './../../shared/interfaces/person-detail';
import { Component, OnInit } from '@angular/core';
import { CrewCredit } from 'src/app/shared/interfaces/crew-credit';

@Component({
  selector: 'app-person-overview',
  templateUrl: './person-overview.component.html',
  styleUrls: ['./person-overview.component.scss']
})
export class PersonOverviewComponent implements OnInit {

  public loadingPersonDetail = true;
  public loadingCastAndCrew = true;

  public personId: string = '';
  public personDetail: PersonDetail;
  public castCredits: CastCredit[] = [];
  public crewCredits: CrewCredit[] = [];

  private activatedRouteSubscription: Subscription | undefined;
  private personDetailSubscription: Subscription;
  private personCastCrewSubscription: Subscription;

  constructor(
    private activatedRoute: ActivatedRoute,
    private person: PersonService,
    private titleService: Title
  ) { }

  ngOnInit(): void {
    this.loadingPersonDetail = true;
    this.loadingCastAndCrew = true;
    this.setOverviewView();
  }

  ngOnChanges(): void {
    this.loadingPersonDetail = true;
    this.loadingCastAndCrew = true;
    this.setOverviewView();
  }

  private setOverviewView(): void {
    this.activatedRouteSubscription = this.activatedRoute.parent?.params.subscribe(params => {
      if (params.id) {
        this.personId = params.id;
        this.getPersonDetail();
        this.getCastAndCrew();
      }
    });

  }

  public getPersonDetail(): void {
    this.personDetailSubscription = this.person.getPerson(this.personId).subscribe(personDetail => {
      console.log(personDetail);
      this.personDetail = personDetail;
      this.loadingPersonDetail = false;
    });
  }

  public getCastAndCrew(): void {
    this.personCastCrewSubscription = this.person.getMovieCredits(this.personId).subscribe(personMovieCredits => {
      console.log(personMovieCredits);
      this.castCredits = personMovieCredits.cast;
      this.crewCredits = personMovieCredits.crew;
      this.loadingCastAndCrew = false;
    });
  }

  public hasBiography(): boolean {
    const biography = this.personDetail.biography;
    return (biography != null && biography.length > 0);
  }

  public loading(): boolean {
    return this.loadingPersonDetail || this.loadingCastAndCrew;
  }

  ngOnDestroy() {
    this.activatedRouteSubscription?.unsubscribe();
    this.personDetailSubscription.unsubscribe();
    this.personCastCrewSubscription.unsubscribe();
  }
}
