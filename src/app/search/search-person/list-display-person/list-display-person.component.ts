import { Component, Input, OnInit } from '@angular/core';
import { PersonListResult } from 'src/app/shared/interfaces/person-list-result';

@Component({
  selector: 'app-list-display-person',
  templateUrl: './list-display-person.component.html',
  styleUrls: ['./list-display-person.component.scss']
})
export class ListDisplayPersonComponent implements OnInit {

  @Input() searchResults: PersonListResult[] = [];
  @Input() currentPage: number = 0;
  @Input() totalResults: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

}
