import { SearchMovieComponent } from './search-movie/search-movie.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SearchComponent } from './search.component';

const routes: Routes = [
  {
    path: '',
    component: SearchComponent,
  },
  {
    path: ':query',
    component: SearchMovieComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SearchRoutingModule { }
