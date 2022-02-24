/* Modules */
import { GeneralSharedModule } from './../shared/modules/general-shared/general-shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieRoutingModule } from './movie-routing.module';
import { EmbeddedMediaModule } from 'ngx-embedded-media';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

/* Pipes */
import { RuntimePipe } from './runtime.pipe';

/* Components */
import { MovieComponent } from './movie.component';
import { MovieTrailerComponent } from './movie-overview/movie-trailer/movie-trailer.component';
import { MovieSpecsComponent } from './movie-overview/movie-specs/movie-specs.component';
import { MovieCastComponent } from './movie-cast/movie-cast.component';
import { MovieCrewComponent } from './movie-crew/movie-crew.component';
import { CastAndCrewSummaryComponent } from './movie-overview/cast-and-crew-summary/cast-and-crew-summary.component';
import { NoMovieFoundComponent } from './no-movie-found/no-movie-found.component';
import { MovieHeaderComponent } from './movie-header/movie-header.component';
import { MovieExternalLinksComponent } from './movie-overview/movie-external-links/movie-external-links.component';
import { MovieOverviewComponent } from './movie-overview/movie-overview.component';
import { MovieSimilarComponent } from './movie-overview/movie-similar/movie-similar.component';
import { SimilarToComponent } from './similar-movies/similar-to/similar-to.component';
import { SimilarMoviesComponent } from './similar-movies/similar-movies.component';
import { OverviewSimilarToComponent } from './movie-overview/movie-similar/overview-similar-to/overview-similar-to.component';
import { HeaderPosterComponent } from './movie-header/header-poster/header-poster.component';

@NgModule({
  declarations: [
    MovieComponent,
    RuntimePipe,
    MovieTrailerComponent,
    MovieSpecsComponent,
    MovieCastComponent,
    MovieCrewComponent,
    CastAndCrewSummaryComponent,
    NoMovieFoundComponent,
    MovieHeaderComponent,
    MovieExternalLinksComponent,
    MovieOverviewComponent,
    MovieSimilarComponent,
    SimilarToComponent,
    SimilarMoviesComponent,
    OverviewSimilarToComponent,
    HeaderPosterComponent
  ],
  imports: [
    CommonModule,
    MovieRoutingModule,
    GeneralSharedModule,
    EmbeddedMediaModule.forRoot(),
    RouterModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class MovieModule { }
