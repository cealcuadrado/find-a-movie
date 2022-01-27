import { Subscription } from 'rxjs';
import { VideoResult } from '../../../shared/interfaces/video-result';
import { MovieTrailerService } from './movie-trailer.service';
import { Component, Input, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-movie-trailer',
  templateUrl: './movie-trailer.component.html',
  styleUrls: ['./movie-trailer.component.scss'],
})
export class MovieTrailerComponent implements OnInit {

  public loadingView: boolean = true;
  public loadingTrailer: boolean = true;

  @Input() movieId: string;
  public youtubeId: string = '';

  public key: string;
  public provider: string;

  private youtubeBaseUrl: string = environment.youtubeBaseUrl;

  private movieTrailerSubscription: Subscription;

  constructor(private movieTrailer: MovieTrailerService) {}

  ngOnInit(): void {
    this.initTrailer();
  }

  ngOnChanges(): void {
    this.initTrailer();
  }

  private initTrailer(): void {
    this.loadingView = true;
    this.loadingTrailer = true;
    this.youtubeId = '';
    this.setTrailer();
  }

  setTrailer(): void {
    this.loadingView = false;
    this.movieTrailerSubscription = this.movieTrailer.getVideos(this.movieId).subscribe((result) => {
      let results: VideoResult[];
      let filteredResults: VideoResult[];

      if (result.results) {
        filteredResults = result.results.filter((x) => x.type === 'Trailer');

        if (filteredResults.length > 0) {
          if (filteredResults[0].site == 'YouTube') {
            this.youtubeId = filteredResults[0].key;
            this.key = filteredResults[0].key;
            this.provider = filteredResults[0].site.toLowerCase();
          }
        }

        this.loadingTrailer = false;
      }
    });
  }

  public loading(): boolean {
    return (this.loadingView || this.loadingTrailer);
  }

  ngOnDestroy() {
    this.movieTrailerSubscription.unsubscribe();
  }
}
