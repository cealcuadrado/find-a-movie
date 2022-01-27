import { MovieService } from './../../movie.service';
import { Subscription } from 'rxjs';
import { MovieDetail } from '../../../shared/interfaces/movie-detail';
import { Component, Input, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-movie-external-links',
  templateUrl: './movie-external-links.component.html',
  styleUrls: ['./movie-external-links.component.scss'],
})
export class MovieExternalLinksComponent implements OnInit {

  public loadingView: boolean = true;
  public loadingSocialNetworks: boolean = true;

  private imdbUrl: string = environment.imdbUrl;
  private boxOfficeMojoUrl: string = environment.boxOfficeMojoUrl;

  @Input() movieDetail: MovieDetail;
  @Input() id: string;

  public facebookId: string | null;
  public instagramId: string | null;
  public twitterId: string | null;

  private movieSocialNetworksSubscription: Subscription;

  constructor(private movie: MovieService) {}

  ngOnInit(): void {
    this.initMovieExternalLinks();
  }

  ngOnChanges(): void {
    this.initMovieExternalLinks();
  }

  private initMovieExternalLinks(): void {
    this.loadingView = true;
    this.loadingSocialNetworks = true;
    this.setLinks();
  }

  public setLinks(): void {
    this.loadingView = false;
    this.movieSocialNetworksSubscription = this.movie
      .getExternalIds(this.id)
      .subscribe((result) => {
        this.facebookId = result.facebook_id;
        this.instagramId = result.instagram_id;
        this.twitterId = result.twitter_id;
        this.loadingSocialNetworks = false;
      });
  }

  public setImdbUrl(imdbId: string): string {
    return `${this.imdbUrl}${imdbId}`;
  }

  public isStrEmpty(strPath: string | null): boolean {
    if (strPath == null) {
      return true;
    } else if (strPath.length == 0) {
      return true;
    } else {
      return false;
    }
  }

  public setBoxOfficeMojoLink(): string {
    return `${this.boxOfficeMojoUrl}${this.movieDetail.imdb_id}/`;
  }

  public allSocialNetworksAreNull(): boolean {
    return (
      this.facebookId == null &&
      this.instagramId == null &&
      this.twitterId == null
    );
  }

  public loading(): boolean {
    return (this.loadingView || this.loadingSocialNetworks);
  }

  ngOnDestroy() {
    this.movieSocialNetworksSubscription.unsubscribe();
  }
}

