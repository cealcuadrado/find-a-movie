import { MovieService } from './movie.service';
import { MovieDetail } from './../shared/interfaces/movie-detail';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss']
})
export class MovieComponent implements OnInit {

  public movieDetail: MovieDetail;
  public id: string;
  constructor(
    private activatedRoute: ActivatedRoute,
    private movie: MovieService
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.id = params.id;
      this.getDetails();
    });
  }

  getDetails(): void {
    this.movie.getMovieDetail(this.id).subscribe(detail => {
      console.log(detail);
      this.movieDetail = detail;
    });
  }

}
