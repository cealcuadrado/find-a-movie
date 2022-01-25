import { Subscription } from 'rxjs';
import { MovieService } from './movie.service';
import { MovieDetail } from './../shared/interfaces/movie-detail';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Crew } from '../shared/interfaces/crew';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss'],
})
export class MovieComponent implements OnInit {

  public loading = true;

  public movieDetail: MovieDetail;
  public id: string;

  public castResults: number = 0;
  public crewResults: number = 0;
  public crew: Crew[] = [];

  private activatedRouteSubscription: Subscription;
  private movieDetailSubscription: Subscription;
  private movieCastAndCrewSubscription: Subscription;

  constructor(
    private activatedRoute: ActivatedRoute,
    private movie: MovieService,
    private titleService: Title
  ) {}

  ngOnInit(): void {
    this.initMovie();
  }

  ngOnChanges(): void {
    this.initMovie();
  }

  private initMovie(): void {
    this.loading = true;
    this.getMovie();
  }

  private getMovie(): void {
    this.activatedRouteSubscription = this.activatedRoute.params.subscribe((params) => {
      if (params.id) {
        this.id = params.id;
        this.getDetails();
        this.getCastAndCrew();
      }
    });
  }

  private getDetails(): void {
    this.movieDetailSubscription = this.movie.getMovieDetail(this.id).subscribe((detail) => {
      if (Object.values(detail).length > 0) {
        this.movieDetail = detail;
        this.setWindowTitle();
      }
      this.loading = false;
    });
  }

  private getCastAndCrew(): void {
    this.movieCastAndCrewSubscription = this.movie.getCastAndCrew(this.id).subscribe((result) => {
      this.castResults = result.cast.length;
      this.crew = result.crew;
      this.getMainCrewMembers();
    });
  }

  private getMainCrewMembers(): void {
    this.crewResults = this.crew.filter((member) => {
      return this.isMainCrew(member.job)
    }).length;
  }

  private isMainCrew(crewJob: string): boolean {
    return (
      crewJob === 'Director' ||
      crewJob === 'Co-Director' ||
      crewJob === 'Writer' ||
      crewJob === 'Screenplay' ||
      crewJob === 'Story' ||
      crewJob === 'Novel' ||
      crewJob === 'Author' ||
      crewJob === 'Characters' ||
      crewJob === 'Producer' ||
      crewJob === 'Executive Producer' ||
      crewJob === 'Director of Photography' ||
      crewJob === 'Production Design' ||
      crewJob === 'Editor' ||
      crewJob === 'Costume Design' ||
      crewJob === 'Original Music Composer' ||
      crewJob === 'Music' ||
      crewJob === 'Music Supervisor' ||
      crewJob === 'Co-Producer' ||
      crewJob === 'Casting' ||
      crewJob === 'Presenter'
    );
  }

  private setWindowTitle(): void {
    let date = new Date(this.movieDetail.release_date);
    let detail = this.movieDetail;
    this.titleService.setTitle(
      `${this.setLocalOrForeignTitle(
        detail
      )} (${date.getFullYear()}) | Find a Movie`
    );
  }

  private setLocalOrForeignTitle(detail: MovieDetail): string {
    return !detail.original_language.match('en') &&
      !detail.original_title.match(detail.title)
      ? `${detail.title} (${detail.original_title})`
      : detail.title;
  }

  ngOnDestroy() {
    this.activatedRouteSubscription.unsubscribe();
    this.movieDetailSubscription.unsubscribe();
    this.movieCastAndCrewSubscription.unsubscribe();
  }
}
