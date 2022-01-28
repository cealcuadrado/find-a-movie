import { Component, Input, OnInit } from '@angular/core';
import { CrewCredit } from 'src/app/shared/interfaces/crew-credit';

@Component({
  selector: 'app-crew-summary',
  templateUrl: './crew-summary.component.html',
  styleUrls: ['./crew-summary.component.scss'],
})
export class CrewSummaryComponent implements OnInit {
  
  public loading: boolean = true;

  @Input() id: string = '';
  @Input() crewCredits: CrewCredit[] = [];

  constructor() { }

  ngOnInit(): void {
    this.initCrewSummary();
  }

  ngOnChanges(): void {
    this.initCrewSummary();
  }

  private initCrewSummary(): void {
    this.loading = false;
  }
}
