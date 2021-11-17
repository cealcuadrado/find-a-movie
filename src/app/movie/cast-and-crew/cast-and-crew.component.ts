import { PersonLink } from './../../shared/interfaces/person-link';
import { Crew } from './../../shared/interfaces/crew';
import { Cast } from './../../shared/interfaces/cast';
import { MovieService } from './../movie.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-cast-and-crew',
  templateUrl: './cast-and-crew.component.html',
  styleUrls: ['./cast-and-crew.component.scss'],
})
export class CastAndCrewComponent implements OnInit {
  public loading: boolean = true;

  @Input() id: string;
  @Input() cast: Cast[] = [];
  @Input() crew: Crew[] = [];

  public direction: PersonLink[];
  public writing: PersonLink[];
  public screenPlayers: PersonLink[];
  public story: PersonLink[];
  public production: PersonLink[];
  public movieCast: PersonLink[];

  public isBasedOnWork: boolean;
  public basedOnWork: PersonLink[];

  constructor(private movie: MovieService) {}

  ngOnInit(): void {
    this.setCastAndCrew();
  }

  ngOnChanges(): void {
    this.loading = true;
    this.setCastAndCrew();
  }

  /*
  resetCastAndCrew(): void {
    this.loading = true;
    this.setCastAndCrew();
  }
  */

  setCastAndCrew(): void {
    this.getDirection();
    this.getWriting();
    this.getScreenplay();
    this.getStory();
    this.getProducers();
    this.getCast();
    this.getBasedOnWork();
    this.loading = false;

    /*
    this.movie.getCastAndCrew(this.id).subscribe((result) => {
      console.log(
        this.crew.filter((member) => member.known_for_department == 'Writing')
      );
    });
    */
  }


  getDirection(): void {
    this.direction = this.crew
      .filter((member) => member.job == 'Director')
      .map((member) => { return { name: member.name, id: member.id }});
  }

  getWriting(): void {
    this.writing = this.crew
      .filter((member) => member.job == 'Writer')
      .map((member) => { return {name: member.name, id: member.id}});
  }

  getScreenplay(): void {
    this.screenPlayers = this.crew
      .filter((member) => member.job == 'Screenplay')
      .map((member) => { return {name: member.name, id: member.id}});
  }

  getStory(): void {
    this.story = this.crew
      .filter((member) => member.job == 'Story')
      .map((member) => {return {name: member.name, id: member.id}});
  }

  getBasedOnWork(): void {
    let basedOnWorkOf = this.crew
      .filter((member) => {
        return member.job === 'Novel' || member.job === 'Author';
      })
      .map((member) => {return {name: member.name, id:member.id}});

    if (basedOnWorkOf.length > 0) {
      this.isBasedOnWork = true;
      this.basedOnWork = basedOnWorkOf;
    } else {
      this.isBasedOnWork = false;
    }
  }

  getProducers(): void {
    this.production = this.crew
      .filter((member) => member.job == 'Producer')
      .map((member) => { return {name: member.name, id: member.id}});
  }

  getCast(): void {
    this.movieCast = this.cast.slice(0, 7).map((member) => {return {name: member.name, id:member.id}});
  }

  atLeastItsOneField(): boolean {
    return (
      !this.direction &&
      !this.writing &&
      !this.screenPlayers &&
      !this.story &&
      !this.isBasedOnWork &&
      !this.production &&
      !this.movieCast
    );
  }
}
