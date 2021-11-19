import { Component, OnInit, Input } from '@angular/core';
import { Cast } from 'src/app/shared/interfaces/cast';

@Component({
  selector: 'app-movie-cast',
  templateUrl: './movie-cast.component.html',
  styleUrls: ['./movie-cast.component.scss']
})
export class MovieCastComponent implements OnInit {

  public loading: boolean = true;

  @Input() cast: Cast[] = [];

  constructor() { }

  ngOnInit(): void {
    this.setCast();
  }

  ngOnChanges(): void {
    this.setCast();
  }

  private setCast(): void {
    this.loading = false;
  }
}
