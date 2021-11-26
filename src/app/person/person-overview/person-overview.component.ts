import { CastCredit } from './../../shared/interfaces/cast-credit';
import { PersonDetail } from './../../shared/interfaces/person-detail';
import { Component, Input, OnInit } from '@angular/core';
import { CrewCredit } from 'src/app/shared/interfaces/crew-credit';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-person-overview',
  templateUrl: './person-overview.component.html',
  styleUrls: ['./person-overview.component.scss']
})
export class PersonOverviewComponent implements OnInit {

  loading = true;

  @Input() personDetail: PersonDetail;
  @Input() castCredits: CastCredit[];
  @Input() crewCredits: CrewCredit[];

  constructor() { }

  ngOnInit(): void {
    this.setCastAndCrew();
  }

  ngOnChanges(): void {
    this.setCastAndCrew();
  }

  public setCastAndCrew(): void {
    this.loading = false;
  }
}
