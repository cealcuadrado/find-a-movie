/* Modules */
import { SharedComponentsModule } from './../shared/shared-components/shared-components.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieRoutingModule } from './movie-routing.module';
import { EmbeddedMediaModule } from 'ngx-embedded-media';
import { RouterModule } from '@angular/router';

/* Pipes */
import { RuntimePipe } from './runtime.pipe';

/* Components */
import { MovieComponent } from './movie.component';
import { CastAndCrewComponent } from './cast-and-crew/cast-and-crew.component';
import { MovieTrailerComponent } from './movie-trailer/movie-trailer.component';
import { MovieSpecsComponent } from './movie-specs/movie-specs.component';
import { MovieSocialNetworksComponent } from './movie-social-networks/movie-social-networks.component';

@NgModule({
  declarations: [MovieComponent, RuntimePipe, CastAndCrewComponent, MovieTrailerComponent, MovieSpecsComponent, MovieSocialNetworksComponent],
  imports: [
    CommonModule,
    MovieRoutingModule,
    SharedComponentsModule,
    EmbeddedMediaModule.forRoot(),
    RouterModule
  ]
})
export class MovieModule { }
