
/* Modules */
import { SharedComponentsModule } from './../shared/shared-components/shared-components.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieRoutingModule } from './movie-routing.module';
import { EmbeddedMediaModule } from 'ngx-embedded-media';

/* Components */
import { MovieComponent } from './movie.component';
import { CastAndCrewComponent } from './cast-and-crew/cast-and-crew.component';
import { MovieTrailerComponent } from './movie-trailer/movie-trailer.component';
import { MovieSpecsComponent } from './movie-specs/movie-specs.component';

/* Pipes */
import { RuntimePipe } from './runtime.pipe';

@NgModule({
  declarations: [MovieComponent, RuntimePipe, CastAndCrewComponent, MovieTrailerComponent, MovieSpecsComponent],
  imports: [
    CommonModule,
    MovieRoutingModule,
    SharedComponentsModule,
    EmbeddedMediaModule.forRoot()
  ]
})
export class MovieModule { }
