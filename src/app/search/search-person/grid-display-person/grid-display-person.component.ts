import { Component, Input, OnInit } from '@angular/core';
import { PersonListResult } from 'src/app/shared/interfaces/person-list-result';

@Component({
  selector: 'app-grid-display-person',
  templateUrl: './grid-display-person.component.html',
  styleUrls: ['./grid-display-person.component.scss']
})
export class GridDisplayPersonComponent implements OnInit {

  @Input() searchResults: PersonListResult[] = [];
  @Input() currentPage: number = 0;
  @Input() totalResults: number = 0;
  
  constructor() { }

  ngOnInit(): void {
  }

}
