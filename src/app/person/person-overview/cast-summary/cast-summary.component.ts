import { CastCredit } from './../../../shared/interfaces/cast-credit';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-cast-summary',
  templateUrl: './cast-summary.component.html',
  styleUrls: ['./cast-summary.component.scss'],
})
export class CastSummaryComponent implements OnInit {

  public loading: boolean = true;

  @Input() id: string = '';
  @Input() castCredits: CastCredit[] = [];

  constructor() {}

  ngOnInit(): void {
    this.initCastSummary();
  }

  ngOnChanges(): void {
    this.initCastSummary();
  }

  private initCastSummary(): void {
    this.loading = false;
  }
}
