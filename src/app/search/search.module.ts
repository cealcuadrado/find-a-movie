import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GeneralSharedModule } from '../shared/modules/general-shared/general-shared.module';
import { SearchRoutingModule } from './search-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SearchBarModule } from '../shared/modules/search-bar/search-bar.module';

import { SearchComponent } from './search.component';
import { SearchMovieComponent } from './search-movie/search-movie.component';
import { SearchPersonComponent } from './search-person/search-person.component';
import { MovieResultComponent } from './search-movie/movie-result/movie-result.component';
import { PersonResultComponent } from './search-person/person-result/person-result.component';
import { GridDisplayMovieComponent } from './search-movie/grid-display-movie/grid-display-movie.component';

@NgModule({
  declarations: [
    SearchComponent,
    SearchMovieComponent,
    SearchPersonComponent,
    MovieResultComponent,
    PersonResultComponent,
    GridDisplayMovieComponent,
  ],
  imports: [
    CommonModule,
    SearchRoutingModule,
    NgxPaginationModule,
    FormsModule,
    ReactiveFormsModule,
    SearchBarModule,
    GeneralSharedModule,
    NgbModule
  ]
})
export class SearchModule { }
