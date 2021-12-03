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

  constructor() {}

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
