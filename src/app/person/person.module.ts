import { PersonSharedModule } from './../shared/modules/person-shared/person-shared.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PersonRoutingModule } from './person-routing.module';
import { PersonComponent } from './person.component';
import { NoPersonFoundComponent } from './no-person-found/no-person-found.component';
import { PersonOverviewComponent } from './person-overview/person-overview.component';
import { PersonCastComponent } from './person-cast/person-cast.component';
import { PersonCrewComponent } from './person-crew/person-crew.component';
import { CastSummaryComponent } from './person-overview/cast-summary/cast-summary.component';


@NgModule({
  declarations: [PersonComponent, NoPersonFoundComponent, PersonOverviewComponent, PersonCastComponent, PersonCrewComponent, CastSummaryComponent],
  imports: [
    CommonModule,
    PersonRoutingModule,
    NgbModule,
    PersonSharedModule
  ]
})
export class PersonModule { }
