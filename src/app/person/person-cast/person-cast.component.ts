import { CastCredit } from './../../shared/interfaces/cast-credit';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-person-cast',
  templateUrl: './person-cast.component.html',
  styleUrls: ['./person-cast.component.scss']
})
export class PersonCastComponent implements OnInit {

  loading = true;

  @Input() castCredits: CastCredit[];

  constructor() { }

  ngOnInit(): void {
    this.setCast();
  }

  ngOnChanges(): void {
    this.setCast();
  }

  public setCast(): void {
    this.loading = false;
  }

}
