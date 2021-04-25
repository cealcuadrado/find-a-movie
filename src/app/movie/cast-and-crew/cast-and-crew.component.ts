import { Crew } from './../../shared/interfaces/crew';
import { Cast } from './../../shared/interfaces/cast';
import { MovieService } from './../movie.service';
import { Component, Input, OnInit, OnChanges } from '@angular/core';

@Component({
  selector: 'app-cast-and-crew',
  templateUrl: './cast-and-crew.component.html',
  styleUrls: ['./cast-and-crew.component.scss']
})
export class CastAndCrewComponent implements OnInit {

  public loading: boolean = true;

  @Input() id: string;
  private cast: Cast[];
  private crew: Crew[];

  public direction: string[];
  public writing: string[];
  public screenPlayers: string[];
  public story: string[];
  public production: string[];
  public movieCast: string[];

  public isBasedOnWork: boolean;

  public basedOnWork: string[];

  constructor(
    private movie: MovieService
  ) { }

  ngOnInit(): void {
    this.setCastAndCrew();
  }

  ngOnChanges(): void {
    this.loading = true;
    this.setCastAndCrew();
  }

  setCastAndCrew(): void {
    this.movie.getCastAndCrew(this.id).subscribe((result) => {
      this.cast = result.cast;
      this.crew = result.crew;
      console.log(this.crew);
      console.log(
        this.crew.filter((member) => member.known_for_department == 'Writing')
      );

      this.getDirection();
      this.getWriting();
      this.getScreenplay();
      this.getStory();
      this.getProducers();
      this.getCast();
      this.getBasedOnWork();
      this.loading = false;
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

  getBasedOnWork(): void {
    let basedOnWorkOf = this.crew.
      filter(member => {
        return (member.job === 'Novel' || member.job === 'Author')
      })
      .map(member => member.name);

    if (basedOnWorkOf.length > 0) {
      this.isBasedOnWork = true;
      this.basedOnWork = basedOnWorkOf;
    } else {
      this.isBasedOnWork = false;
    }
  }

  getProducers(): void {
    this.production = this.crew.filter(member => member.job == 'Producer').map(member => member.name);
  }

  getCast(): void {
    this.movieCast = this.cast.slice(0, 7).map(member => member.name);
  }

}
