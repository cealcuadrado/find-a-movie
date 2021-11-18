import { PersonLink } from './../../shared/interfaces/person-link';
import { Component, Input, OnInit } from '@angular/core';
import { Crew } from 'src/app/shared/interfaces/crew';

@Component({
  selector: 'app-movie-crew',
  templateUrl: './movie-crew.component.html',
  styleUrls: ['./movie-crew.component.scss']
})
export class MovieCrewComponent implements OnInit {

  public loading: boolean = true;

  @Input() crew: Crew[] = [];

  public direction: PersonLink[] = [];
  public writing: PersonLink[] = [];

  constructor() { }

  ngOnInit(): void {
    this.setCrew();
  }

  setCrew(): void {
    this.loading = false;
    this.getDirection();
    this.getWriting();
  }

  private getDirection(): void {
    this.direction = this.crew
      .filter((member) => member.job == 'Director')
      .map((member) => {
        return { name: member.name, id: member.id }
      })
  }

  private getWriting(): void {
    this.writing = this.crew
      .filter((member) => member.job == 'Writer')
      .map((member) => {
      return { name: member.name, id: member.id }
    })
  }
}
