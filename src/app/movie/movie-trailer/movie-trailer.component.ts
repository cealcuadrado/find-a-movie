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

  setTrailer(): void {
    this.movieTrailer.getVideos(this.movieId).subscribe((result) => {
      let results = result.results;
      results = results.filter((x) => x.type === 'Trailer');

      if (results.length > 0) {
        if (results[0].site == 'YouTube') {
          this.youtubeId = results[0].key;
          this.key = results[0].key;
          this.provider = results[0].site.toLowerCase();
        }
      }

      this.loading = false;
    });
  }
}
