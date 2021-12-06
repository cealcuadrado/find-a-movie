import { PersonListResult } from 'src/app/shared/interfaces/person-list-result';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-person-result',
  templateUrl: './person-result.component.html',
  styleUrls: ['./person-result.component.scss']
})
export class PersonResultComponent implements OnInit {

  @Input() personResult: PersonListResult;
  
  constructor() { }

  ngOnInit(): void {
  }

}
