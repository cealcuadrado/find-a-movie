import { Component, Input, OnInit } from '@angular/core';
import { CrewCredit } from 'src/app/shared/interfaces/crew-credit';

@Component({
  selector: 'app-person-crew',
  templateUrl: './person-crew.component.html',
  styleUrls: ['./person-crew.component.scss']
})
export class PersonCrewComponent implements OnInit {

  public loading = true;

  public currentPage: number;
  public resultsPerPage = 20;
  public totalResults: number;

  public filterInput: string = '';

  @Input() name: string = '';
  @Input() crewCredits: CrewCredit[];

  constructor(private window: Window) { }

  ngOnInit(): void {
    this.setCrew();
  }

  ngOnChanges(): void {
    this.setCrew();
  }

  public setCrew(): void {
    this.loading = false;
    this.currentPage = 1;
    this.totalResults = this.crewCredits.length;
    this.filterInput = '';
  }

  public onPageChange(event: number): void {
    this.currentPage = event;
    this.window.scrollTo({ top: 400 });
  }
}
