import { SearchPersonComponent } from './search-person/search-person.component';
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
    path: 'movie/:query',
    component: SearchMovieComponent,
  },
  {
    path: 'person/:query',
    component: SearchPersonComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SearchRoutingModule { }
