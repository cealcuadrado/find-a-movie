import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchBarComponent } from './search-bar.component';
import { BarMovieComponent } from './bar-movie/bar-movie.component';

@NgModule({
  declarations: [SearchBarComponent, BarMovieComponent],
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
