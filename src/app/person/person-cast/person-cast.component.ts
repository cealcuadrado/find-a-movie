import { CastCredit } from './../../shared/interfaces/cast-credit';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-person-cast',
  templateUrl: './person-cast.component.html',
  styleUrls: ['./person-cast.component.scss'],
})
export class PersonCastComponent implements OnInit {
  loading = true;

  public currentPage: number;
  public resultsPerPage = 20;
  public totalResults: number;

  public filterInput: string;

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
    this.currentPage = 1;
    this.loading = false;
    this.totalResults = this.castCredits.length;
  }

  public onPageChange(event: any): void {
    this.currentPage = event;
    this.window.scrollTo({ top: 400 });
  }
}
