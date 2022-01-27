import { Subscription } from 'rxjs';
import { Title } from '@angular/platform-browser';
import { MovieService } from './../movie.service';
import { ActivatedRoute } from '@angular/router';
import { MovieDetail } from './../../shared/interfaces/movie-detail';
import { Component, OnInit } from '@angular/core';
import { Cast } from 'src/app/shared/interfaces/cast';
import { Crew } from 'src/app/shared/interfaces/crew';

@Component({
  selector: 'app-movie-overview',
  templateUrl: './movie-overview.component.html',
  styleUrls: ['./movie-overview.component.scss'],
})
export class MovieOverviewComponent implements OnInit {
  
  public loadingDetails = true;
  public loadingCastAndCrew = true;

  public id: string;
  public movieDetail: MovieDetail;
  public cast: Cast[] = [];
  public crew: Crew[] = [];

  private activatedRouteSubscription: Subscription | undefined;
  private movieDetailSubscription: Subscription;
  private movieCastAndCrewSubscription: Subscription;

  constructor(
    private activatedRoute: ActivatedRoute,
    private movie: MovieService,
    private titleService: Title
  ) {}

  ngOnInit(): void {
    this.initMovieOverview();
  }

  ngOnChanges(): void {
    this.initMovieOverview();
  }

  private initMovieOverview(): void {
    this.loadingDetails = true;
    this.loadingCastAndCrew = true;
    this.setOverview();
  }

  private setOverview(): void {
    this.activatedRouteSubscription =
      this.activatedRoute.parent?.params.subscribe((params) => {
        if (params.id) {
          this.id = params.id;
          this.getDetails();
          this.getCastAndCrew();
        }
      });
  }

  private getDetails(): void {
    this.movieDetailSubscription = this.movie
      .getMovieDetail(this.id)
      .subscribe((detail) => {
        if (Object.values(detail).length > 0) {
          this.movieDetail = detail;
          this.setWindowTitle();
        }
        this.loadingDetails = false;
      });
  }

  private getCastAndCrew(): void {
    this.movieCastAndCrewSubscription = this.movie
      .getCastAndCrew(this.id)
      .subscribe((result) => {
        console.log(result);
        this.cast = result.cast;
        this.crew = result.crew;
        this.loadingCastAndCrew = false;
      });
  }

  public loading(): boolean {
    return this.loadingDetails || this.loadingCastAndCrew;
  }

  private setWindowTitle(): void {
    let detail = this.movieDetail;
    let year = !this.isDateEmpty() ? new Date(this.movieDetail.release_date).getFullYear(): 'No Release Date';
    this.titleService.setTitle(`${this.setLocalOrForeignTitle(detail)} (${year}) | Find a Movie`);
  }

  public isDateEmpty(): boolean {
    return this.movieDetail.release_date.length == 0;
  }

  private setLocalOrForeignTitle(detail: MovieDetail): string {
    return !detail.original_language.match('en') &&
      !detail.original_title.match(detail.title)
      ? `${detail.title} (${detail.original_title})`
      : detail.title;
  }

  ngOnDestroy() {
    this.activatedRouteSubscription?.unsubscribe();
    this.movieDetailSubscription.unsubscribe();
    this.movieCastAndCrewSubscription.unsubscribe();
  }
}
