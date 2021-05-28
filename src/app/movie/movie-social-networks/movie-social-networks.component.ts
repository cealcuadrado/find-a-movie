import { MovieService } from './../movie.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-movie-social-networks',
  templateUrl: './movie-social-networks.component.html',
  styleUrls: ['./movie-social-networks.component.scss']
})
export class MovieSocialNetworksComponent implements OnInit {

  public loading: boolean = true;

  @Input() id: string;

  public facebookId: string | null;
  public instagramId: string | null;
  public twitterId: string | null;


  constructor(
    private movie: MovieService
  ) { }

  ngOnInit(): void {
    this.setExternalIds();
  }

  ngOnChanges(): void {
    this.loading = true;
    this.setExternalIds();
  }

  setExternalIds(): void {
    this.movie.getExternalIds(this.id).subscribe((result) => {
      this.facebookId = result.facebook_id;
      this.instagramId = result.instagram_id;
      this.twitterId = result.twitter_id;
      this.loading = false;
    });
  }

}
