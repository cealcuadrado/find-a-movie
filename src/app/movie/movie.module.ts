/* Modules */
import { SharedComponentsModule } from './../shared/shared-components/shared-components.module';
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
import { MovieTrailerComponent } from './movie-trailer/movie-trailer.component';
import { MovieSpecsComponent } from './movie-specs/movie-specs.component';
import { MovieSocialNetworksComponent } from './movie-social-networks/movie-social-networks.component';
import { MovieCastComponent } from './movie-cast/movie-cast.component';
import { MovieCrewComponent } from './movie-crew/movie-crew.component';
import { CastAndCrewSummaryComponent } from './cast-and-crew-summary/cast-and-crew-summary.component';

@NgModule({
  declarations: [
    MovieComponent,
    RuntimePipe,
    MovieTrailerComponent,
    MovieSpecsComponent,
    MovieSocialNetworksComponent,
    MovieCastComponent,
    MovieCrewComponent,
    CastAndCrewSummaryComponent,
  ],
  imports: [
    CommonModule,
    MovieRoutingModule,
    SharedComponentsModule,
    EmbeddedMediaModule.forRoot(),
    RouterModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class MovieModule { }
