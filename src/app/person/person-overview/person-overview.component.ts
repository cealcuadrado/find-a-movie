import { PersonDetail } from './../../shared/interfaces/person-detail';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-person-overview',
  templateUrl: './person-overview.component.html',
  styleUrls: ['./person-overview.component.scss']
})
export class PersonOverviewComponent implements OnInit {

  @Input() personDetail: PersonDetail;

  constructor() { }

  ngOnInit(): void {
  }

}
