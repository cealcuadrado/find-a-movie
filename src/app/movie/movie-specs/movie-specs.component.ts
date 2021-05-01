import { MovieDetail } from './../../shared/interfaces/movie-detail';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-movie-specs',
  templateUrl: './movie-specs.component.html',
  styleUrls: ['./movie-specs.component.scss']
})
export class MovieSpecsComponent implements OnInit {

  @Input() movieDetail: MovieDetail;
  
  constructor() { }

  ngOnInit(): void {
  }

}
