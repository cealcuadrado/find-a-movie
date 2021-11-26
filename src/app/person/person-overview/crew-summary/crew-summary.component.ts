import { Component, Input, OnInit } from '@angular/core';
import { CrewCredit } from 'src/app/shared/interfaces/crew-credit';

@Component({
  selector: 'app-crew-summary',
  templateUrl: './crew-summary.component.html',
  styleUrls: ['./crew-summary.component.scss'],
})
export class CrewSummaryComponent implements OnInit {
  loading = true;

  @Input() crewCredits: CrewCredit[];

  constructor() { }
  
  ngOnInit(): void {
    this.setCredits();
  }

  ngOnChanges(): void {
    this.setCredits();
  }

  setCredits(): void {
    this.loading = false;
  }
}
