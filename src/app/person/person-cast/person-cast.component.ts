import { CastCredit } from './../../shared/interfaces/cast-credit';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-person-cast',
  templateUrl: './person-cast.component.html',
  styleUrls: ['./person-cast.component.scss'],
})
export class PersonCastComponent implements OnInit {
  public loading = true;

  public currentPage: number;
  public resultsPerPage = 20;
  public totalResults: number;

  public filterInput: string = '';

  @Input() name: string = '';
  @Input() castCredits: CastCredit[];

  constructor(private window: Window) {}

  ngOnInit(): void {
    this.setCast();
  }

  ngOnChanges(): void {
    this.setCast();
  }

  public setCast(): void {
    this.loading = false;
    this.currentPage = 1;
    this.totalResults = this.castCredits.length;
    this.filterInput = '';
  }

  public onPageChange(event: any): void {
    this.currentPage = event;
    this.window.scrollTo({ top: 400 });
  }
}
