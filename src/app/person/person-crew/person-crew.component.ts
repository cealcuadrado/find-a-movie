import { Component, Input, OnInit } from '@angular/core';
import { CrewCredit } from 'src/app/shared/interfaces/crew-credit';

@Component({
  selector: 'app-person-crew',
  templateUrl: './person-crew.component.html',
  styleUrls: ['./person-crew.component.scss']
})
export class PersonCrewComponent implements OnInit {

  loading = true;

  @Input() crewCredits: CrewCredit[];

  constructor() { }

  ngOnInit(): void {
    this.setCrew();
  }

  ngOnChanges(): void {
    this.setCrew();
  }

  public setCrew(): void {
    this.loading = false;
  }
}
