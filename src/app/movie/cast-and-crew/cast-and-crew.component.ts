import { Crew } from './../../shared/interfaces/crew';
import { Cast } from './../../shared/interfaces/cast';
import { MovieService } from './../movie.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-cast-and-crew',
  templateUrl: './cast-and-crew.component.html',
  styleUrls: ['./cast-and-crew.component.scss']
})
export class CastAndCrewComponent implements OnInit {

  @Input() id: string;
  private cast: Cast[];
  private crew: Crew[];

  public direction: string[];
  public writing: string[];
  public screenPlayers: string[];
  public story: string[];
  public production: string[];
  public movieCast: string[];

  constructor(
    private movie: MovieService
  ) { }

  ngOnInit(): void {
    this.movie.getCastAndCrew(this.id).subscribe(result => {
      this.cast = result.cast;
      this.crew = result.crew;
      console.log(this.crew);

      this.getDirection();
      this.getWriting();
      this.getScreenplay();
      this.getStory();
      this.getProducers();
      this.getCast();
    });
  }

  getDirection(): void {
    this.direction = this.crew.filter(member => member.job == 'Director').map(member => member.name);
  }

  getWriting(): void {
    this.writing = this.crew.filter(member => member.job == 'Writer').map(member => member.name);
  }

  getScreenplay(): void {
    this.screenPlayers = this.crew.filter(member => member.job == 'Screenplay').map(member => member.name);
  }

  getStory(): void {
    this.story = this.crew.filter(member => member.job == 'Story').map(member => member.name);
  }

  getProducers(): void {
    this.production = this.crew.filter(member => member.job == 'Producer').map(member => member.name);
  }

  getCast(): void {
    this.movieCast = this.cast.slice(0, 7).map(member => member.name);
  }

}
