import { VideoResult } from './../../shared/interfaces/video-result';
import { MovieTrailerService } from './movie-trailer.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-movie-trailer',
  templateUrl: './movie-trailer.component.html',
  styleUrls: ['./movie-trailer.component.scss'],
})
export class MovieTrailerComponent implements OnInit {
  public loading: boolean = true;

  @Input() movieId: string;
  private youtubeBaseUrl: string = 'https://www.youtube.com/embed/';
  public youtubeId: string;

  public key: string;
  public provider: string;

  constructor(private movieTrailer: MovieTrailerService) {}

  ngOnInit(): void {
    this.setTrailer();
  }

  ngOnChanges(): void {
    this.loading = true;
    this.setTrailer();
  }

  /*
  resetMovieTrailer(): void {
    this.loading = true;
    this.setTrailer();
  }
  */

  setTrailer(): void {
    this.movieTrailer.getVideos(this.movieId).subscribe((result) => {
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

        this.loading = false;
      }
    });
  }
}
