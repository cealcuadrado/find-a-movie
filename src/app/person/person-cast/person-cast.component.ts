import { PersonDetail } from './../../shared/interfaces/person-detail';
import { LocalStorageService } from './../../shared/services/local-storage.service';
import { Subscription } from 'rxjs';
import { Title } from '@angular/platform-browser';
import { PersonService } from './../person.service';
import { ActivatedRoute } from '@angular/router';
import { CastCredit } from './../../shared/interfaces/cast-credit';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-person-cast',
  templateUrl: './person-cast.component.html',
  styleUrls: ['./person-cast.component.scss'],
})
export class PersonCastComponent implements OnInit {
  public loadingPersonDetail = true;
  public loadingCast = true;

  public currentPage: number = 1;
  public resultsPerPage = 20;
  public totalResults: number = 0;

  public filterInput: string = '';

  public personDetail: PersonDetail;
  public personId: string = '';
  public castCredits: CastCredit[] = [];

  private activatedRouteSubscription: Subscription | undefined;
  private personCastSubscription: Subscription;

  constructor(
    private activatedRoute: ActivatedRoute,
    private person: PersonService,
    private titleService: Title,
    private window: Window,
    private localStorage: LocalStorageService
  ) {}

  ngOnInit(): void {
    this.loadingPersonDetail = true;
    this.loadingCast = true;
    this.setCastView();
  }

  ngOnChanges(): void {
    this.loadingPersonDetail = true;
    this.loadingCast = true;
    this.setCastView();
  }

  public setCastView(): void {
    this.currentPage = 1;
    this.totalResults = this.castCredits.length;
    this.filterInput = '';
    this.personDetail = this.localStorage.get('currentPerson');

    this.setWindowTitle();
    this.loadingPersonDetail = false;

    this.activatedRouteSubscription =
      this.activatedRoute.parent?.params.subscribe((params) => {
        if (params.id) {
          this.personId = params.id;
          this.getCast();
        }
      });
  }

  public getCast(): void {
    this.personCastSubscription = this.person
      .getMovieCredits(this.personId)
      .subscribe((personMovieCredits) => {
        this.castCredits = personMovieCredits.cast;
        this.currentPage = 1;
        this.totalResults = this.castCredits.length;
        this.filterInput = '';
        this.loadingCast = false;
      });
  }

  public loading(): boolean {
    return this.loadingPersonDetail || this.loadingCast;
  }

  public onPageChange(event: any): void {
    this.currentPage = event;
    this.window.scrollTo({ top: 400 });
  }

  private setWindowTitle(): void {
    this.titleService.setTitle(`Work of ${this.personDetail.name} as Cast | Find a Movie`);
  }

  ngOnDestroy() {
    this.activatedRouteSubscription?.unsubscribe();
    this.personCastSubscription.unsubscribe();
  }
}
