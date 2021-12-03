import { SearchMode } from './../../interfaces/search-mode';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { MovieListResult } from '../../interfaces/movie-list-result';
import { SearchService } from 'src/app/search/search.service';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss'],
})
export class SearchBarComponent implements OnInit {
  public searchMode: SearchMode;

  public searchModes: SearchMode[] = [
    { name: 'Movies', value: 'movies' },
    { name: 'People', value: 'people' }
  ];

  constructor() {}

  ngOnInit(): void {
    this.searchMode = this.searchModes[0];
  }

  public changeSearchMode(searchMode: SearchMode): void {
    this.searchMode = searchMode;
  }
}
