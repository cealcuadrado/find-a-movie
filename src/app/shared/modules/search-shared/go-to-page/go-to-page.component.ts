import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-go-to-page',
  templateUrl: './go-to-page.component.html',
  styleUrls: ['./go-to-page.component.scss']
})
export class GoToPageComponent implements OnInit {

  @Input() totalPages: number = 0;
  @Input() pageNumbers: number[] = [];
  @Input() selectPage: number = 0;

  @Output() changePage = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {}

  public changeSelectPage(evt: any): void {
    this.changePage.emit(this.selectPage);
  }
}
