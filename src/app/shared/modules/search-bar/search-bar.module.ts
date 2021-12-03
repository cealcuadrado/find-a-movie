import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchBarComponent } from './search-bar.component';
import { BarMovieComponent } from './bar-movie/bar-movie.component';
import { BarPeopleComponent } from './bar-people/bar-people.component';

@NgModule({
  declarations: [SearchBarComponent, BarMovieComponent, BarPeopleComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule
  ],
  exports: [
    SearchBarComponent
  ]
})
export class SearchBarModule { }
