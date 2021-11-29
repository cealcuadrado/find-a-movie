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
  public totalPages: number;

  public pageNumbers: number[];
  public selectPage: number;

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
    this.selectPage = 1;
    this.loading = false;
    this.totalResults = this.castCredits.length;
    this.totalPages = Math.ceil(this.castCredits.length / this.resultsPerPage);
    this.generateSelectPageNumbers();
  }

  public calculateLeftCounter(): number {
    return this.resultsPerPage * (this.currentPage - 1) + 1;
  }

  public calculateRightCounter(): number {
    return this.resultsPerPage * this.currentPage < this.totalResults
      ? this.resultsPerPage * this.currentPage
      : this.totalResults;
  }

  private generateSelectPageNumbers(): void {
    this.pageNumbers = [];
    for (let i = 0; i < this.totalPages; i++) {
      this.pageNumbers.push(i + 1);
    }
  }

  public changeSelectPage(event: any) {
    this.onPageChange(event.target.value);
  }

  public onPageChange(event: any): void {
    this.currentPage = event;
    this.selectPage = this.currentPage;
    this.window.scrollTo({ top: 400 });
  }
}
