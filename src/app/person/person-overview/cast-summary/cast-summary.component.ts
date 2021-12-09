import { Subscription } from 'rxjs';
import { PersonService } from './../../person.service';
import { environment } from './../../../../environments/environment';
import { CastCredit } from './../../../shared/interfaces/cast-credit';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-cast-summary',
  templateUrl: './cast-summary.component.html',
  styleUrls: ['./cast-summary.component.scss'],
})
export class CastSummaryComponent implements OnInit {
  loading = true;

  @Input() castCredits: CastCredit[] = [];

  constructor(
    private person: PersonService
  ) {}

  ngOnInit(): void {
    this.setCredits();
  }

  ngOnChanges(): void {
    this.setCredits();
  }

  private setCredits(): void {
    this.loading = false;
  }

  public seeCompleteCast(): void {
    this.person.setCurrentTab(2);
  }
}
