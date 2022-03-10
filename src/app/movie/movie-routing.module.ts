import { NoMovieFoundComponent } from './no-movie-found/no-movie-found.component';
import { SimilarMoviesComponent } from './similar-movies/similar-movies.component';
import { MovieCrewComponent } from './movie-crew/movie-crew.component';
import { MovieCastComponent } from './movie-cast/movie-cast.component';
import { MovieOverviewComponent } from './movie-overview/movie-overview.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MovieComponent } from './movie.component';

const routes: Routes = [
  {
    path: 'not-found',
    component: NoMovieFoundComponent
  },
  {
    path: ':id',
    component: MovieComponent,
    children: [
      { path: '', redirectTo: 'overview', pathMatch: 'full'},
      { path: 'overview', component: MovieOverviewComponent },
      { path: 'cast', component: MovieCastComponent },
      { path: 'crew', component: MovieCrewComponent },
      { path: 'similar', component: SimilarMoviesComponent },
    ]
  },
  {
    path: '',
    redirectTo: '/home'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MovieRoutingModule { }
