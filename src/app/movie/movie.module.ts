import { SharedComponentsModule } from './../shared/shared-components/shared-components.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieRoutingModule } from './movie-routing.module';
import { MovieComponent } from './movie.component';
import { RuntimePipe } from './runtime.pipe';
import { CastAndCrewComponent } from './cast-and-crew/cast-and-crew.component';

@NgModule({
  declarations: [MovieComponent, RuntimePipe, CastAndCrewComponent],
  imports: [
    CommonModule,
    MovieRoutingModule,
    SharedComponentsModule,
  ]
})
export class MovieModule { }
