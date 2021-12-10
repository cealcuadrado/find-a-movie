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
  public loading: boolean = true;
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
    this.loading = true;
    this.setLinks();
  }

  ngOnChanges(): void {
    this.loading = true;
    this.setLinks();
  }

  public setLinks(): void {
    console.log(this.movieDetail);
    this.movieSocialNetworksSubscription = this.movie
      .getExternalIds(this.id)
      .subscribe((result) => {
        this.facebookId = result.facebook_id;
        this.instagramId = result.instagram_id;
        this.twitterId = result.twitter_id;
        this.loading = false;
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

  ngOnDestroy() {
    this.movieSocialNetworksSubscription.unsubscribe();
  }
}

