import { MovieListResult } from './../../../shared/interfaces/movie-list-result';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {

  isMenuCollapsed = true;

  constructor() {}

  ngOnInit(): void {
  }

  public toggleCollapse(): void {
    this.isMenuCollapsed = !this.isMenuCollapsed;
  }
}
