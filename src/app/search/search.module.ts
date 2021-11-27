import { SearchBarModule } from './../shared/modules/search-bar/search-bar.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SearchRoutingModule } from './search-routing.module';
import { SearchComponent } from './search.component';
import { SearchResultComponent } from './search-result/search-result.component';
import { SearchDefaultComponent } from './search-default/search-default.component';
import { SearchMovieComponent } from './search-movie/search-movie.component';
import { SearchPersonComponent } from './search-person/search-person.component';

@NgModule({
  declarations: [
    SearchComponent,
    SearchResultComponent,
    SearchDefaultComponent,
    SearchMovieComponent,
    SearchPersonComponent
  ],
  imports: [
    CommonModule,
    SearchRoutingModule,
    NgxPaginationModule,
    FormsModule,
    ReactiveFormsModule,
    SearchBarModule
  ]
})
export class SearchModule { }
