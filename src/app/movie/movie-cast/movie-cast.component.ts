import { MovieDetail } from './../../shared/interfaces/movie-detail';
import { LocalStorageService } from './../../shared/services/local-storage.service';
import { Title } from '@angular/platform-browser';
import { MovieService } from './../movie.service';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { Cast } from 'src/app/shared/interfaces/cast';

@Component({
  selector: 'app-movie-cast',
  templateUrl: './movie-cast.component.html',
  styleUrls: ['./movie-cast.component.scss'],
})
export class MovieCastComponent implements OnInit {
  public loading: boolean = true;

  public id: string;
  public cast: Cast[] = [];

  private activatedRouteSubscription: Subscription | undefined;
  private movieCastSubscription: Subscription;

  constructor(
    private activatedRoute: ActivatedRoute,
    private movie: MovieService,
    private titleService: Title,
    private localStorage: LocalStorageService
  ) {}

  ngOnInit(): void {
    this.loading = true;
    this.setCastView();
  }

  ngOnChanges(): void {
    this.loading = true;
    this.setCastView();
  }

  private setCastView(): void {
    this.activatedRouteSubscription =
      this.activatedRoute.parent?.params.subscribe((params) => {
        if (params.id) {
          this.id = params.id;
          this.getCast();
        }
      });
  }

  private getCast(): void {
    this.movieCastSubscription = this.movie
      .getCastAndCrew(this.id)
      .subscribe((result) => {
        this.cast = result.cast;
        this.setWindowTitle();
        this.loading = false;
      });
  }

  private setWindowTitle(): void {
    let detail = this.localStorage.get('currentMovie');
    let year = !this.isDateEmpty(detail)? new Date(detail.release_date).getFullYear(): 'No Release Date';
    this.titleService.setTitle(`Cast of ${this.setLocalOrForeignTitle(detail)} (${year}) | Find a Movie`);
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
    this.movieCastSubscription.unsubscribe();
  }
}
