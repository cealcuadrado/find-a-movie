import { SearchMode } from './../../interfaces/search-mode';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss'],
})
export class SearchBarComponent implements OnInit {
  public searchMode: SearchMode;

  public searchModes: SearchMode[] = [
    { name: 'Movies', value: 'movies', icon: 'fa-film' },
    { name: 'People', value: 'people', icon: 'fa-user' }
  ];

  constructor() {}

  ngOnInit(): void {
    this.searchMode = this.searchModes[0];
  }

  public changeSearchMode(searchMode: SearchMode): void {
    this.searchMode = searchMode;
  }
}
