import { Subscription } from 'rxjs';
import { PersonService } from './../person.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { CrewCredit } from 'src/app/shared/interfaces/crew-credit';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-person-crew',
  templateUrl: './person-crew.component.html',
  styleUrls: ['./person-crew.component.scss']
})
export class PersonCrewComponent implements OnInit {

  public loadingPersonDetail = true;
  public loadingCrew = true;

  public currentPage: number = 1;
  public resultsPerPage = 20;
  public totalResults: number = 0;

  public filterInput: string = '';

  personId: string = '';
  name: string = '';
  crewCredits: CrewCredit[] = [];

  constructor(
    private activatedRoute: ActivatedRoute,
    private person: PersonService,
    private titleService: Title,
    private window: Window
  ) { }

  private activatedRouteSubscription: Subscription | undefined;
  private personDetailSubscription: Subscription;
  private personCrewSubscription: Subscription;

  ngOnInit(): void {
    this.loadingPersonDetail = true;
    this.loadingCrew = true;
    this.setCrewView();
  }

  ngOnChanges(): void {
    this.loadingPersonDetail = true;
    this.loadingCrew = true;
    this.setCrewView();
  }

  public setCrewView(): void {
    this.activatedRouteSubscription = this.activatedRoute.parent?.params.subscribe(params => {
      if (params.id) {
        this.personId = params.id;
        this.getPersonDetail();
        this.getCrew();
      }
    });
  }

  public getPersonDetail(): void {
    this.personDetailSubscription = this.person.getPerson(this.personId).subscribe(personDetail => {
      this.name = personDetail.name;
      this.loadingPersonDetail = false;
    });
  }

  public getCrew(): void {
    this.personCrewSubscription = this.person.getMovieCredits(this.personId).subscribe(personMovieCredits => {
      this.crewCredits = personMovieCredits.crew;
      this.currentPage = 1;
      this.totalResults = this.crewCredits.length;
      this.filterInput = '';
      this.loadingCrew = false;
    });
  }

  public loading(): boolean {
    return this.loadingPersonDetail || this.loadingCrew;
  }

  public onPageChange(event: number): void {
    this.currentPage = event;
    this.window.scrollTo({ top: 400 });
  }

  ngOnDestroy() {
    this.activatedRouteSubscription?.unsubscribe();
    this.personDetailSubscription.unsubscribe();
    this.personCrewSubscription.unsubscribe();
  }
}
