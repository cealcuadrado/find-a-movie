import { Title } from '@angular/platform-browser';
import { MovieService } from './../movie.service';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { Cast } from 'src/app/shared/interfaces/cast';

@Component({
  selector: 'app-movie-cast',
  templateUrl: './movie-cast.component.html',
  styleUrls: ['./movie-cast.component.scss']
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
    private titleService: Title
  ) { }

  ngOnInit(): void {
    this.setCastView();
  }

  ngOnChanges(): void {
    this.setCastView();
  }

  private setCastView(): void {
    this.activatedRouteSubscription = this.activatedRoute.parent?.params.subscribe(
      params => {
        if (params.id) {
          this.id = params.id;
          this.getCast();
        }
      }
    );
  }

  private getCast(): void {
    this.movieCastSubscription = this.movie.getCastAndCrew(this.id).subscribe(result => {
      this.cast = result.cast;
    });
  }

  ngOnDestroy() {
    this.activatedRouteSubscription?.unsubscribe();
    this.movieCastSubscription.unsubscribe();
  }
}
