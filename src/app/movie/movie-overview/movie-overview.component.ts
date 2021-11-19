import { MovieDetail } from './../../shared/interfaces/movie-detail';
import { Component, Input, OnInit } from '@angular/core';
import { Cast } from 'src/app/shared/interfaces/cast';
import { Crew } from 'src/app/shared/interfaces/crew';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-movie-overview',
  templateUrl: './movie-overview.component.html',
  styleUrls: ['./movie-overview.component.scss'],
})
export class MovieOverviewComponent implements OnInit {

  @Input() id: string;
  @Input() movieDetail: MovieDetail;
  @Input() cast: Cast[];
  @Input() crew: Crew[];

  private imdbUrl: string = environment.imdbUrl;

  constructor() {}

  ngOnInit(): void {}
}
