import { environment } from './../../environments/environment';
import { MovieService } from './movie.service';
import { MovieDetail } from './../shared/interfaces/movie-detail';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss'],
})
export class MovieComponent implements OnInit {
  public movieDetail: MovieDetail;
  public id: string;
  private posterUrl: string = environment.posterUrl;
  private backdropUrl: string = environment.backdropUrl;

  constructor(
    private activatedRoute: ActivatedRoute,
    private movie: MovieService
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      this.id = params.id;
      this.getDetails();
    });
  }

  getDetails(): void {
    this.movie.getMovieDetail(this.id).subscribe((detail) => {
      console.log(detail);
      this.movieDetail = detail;
    });
  }

  setPosterUrl(posterPath: string | null): string {
    return !posterPath
      ? 'https://via.placeholder.com/600x450?text=No+poster+available'
      : `${this.posterUrl}${posterPath}`;
  }

  setBackdropUrl(backdropPath: string | null): string {
    return !backdropPath ? 'https://via.placeholder.com/600x450?text=No+image+available' : `${this.backdropUrl}${backdropPath}`;
  }

  isDateEmpty(dateStr: string): boolean {
    return dateStr.length == 0;
  }
}
