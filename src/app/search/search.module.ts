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
import { GridDisplayMovieComponent } from './search-movie/grid-display-movie/grid-display-movie.component';
import { GridMovieResultComponent } from './search-movie/grid-display-movie/grid-movie-result/grid-movie-result.component';
import { ListDisplayMovieComponent } from './search-movie/list-display-movie/list-display-movie.component';
import { ListMovieResultComponent } from './search-movie/list-display-movie/list-movie-result/list-movie-result.component';
import { GridDisplayPersonComponent } from './search-person/grid-display-person/grid-display-person.component';
import { GridPersonResultComponent } from './search-person/grid-display-person/grid-person-result/grid-person-result.component';
import { ListDisplayPersonComponent } from './search-person/list-display-person/list-display-person.component';
import { ListPersonResultComponent } from './search-person/list-display-person/list-person-result/list-person-result.component';
import { SearchSharedModule } from '../shared/modules/search-shared/search-shared.module';

@NgModule({
  declarations: [
    SearchComponent,
    SearchMovieComponent,
    SearchPersonComponent,
    GridDisplayMovieComponent,
    GridMovieResultComponent,
    ListDisplayMovieComponent,
    ListMovieResultComponent,
    GridDisplayPersonComponent,
    GridPersonResultComponent,
    ListDisplayPersonComponent,
    ListPersonResultComponent
  ],
  imports: [
    CommonModule,
    SearchRoutingModule,
    NgxPaginationModule,
    FormsModule,
    ReactiveFormsModule,
    SearchBarModule,
    GeneralSharedModule,
    NgbModule,
    SearchSharedModule
  ]
})
export class SearchModule { }
