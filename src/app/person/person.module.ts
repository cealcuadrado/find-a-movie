import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PersonSharedModule } from './../shared/modules/person-shared/person-shared.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxPaginationModule } from 'ngx-pagination';

import { PersonRoutingModule } from './person-routing.module';
import { PersonComponent } from './person.component';
import { NoPersonFoundComponent } from './no-person-found/no-person-found.component';
import { PersonOverviewComponent } from './person-overview/person-overview.component';
import { PersonCastComponent } from './person-cast/person-cast.component';
import { PersonCrewComponent } from './person-crew/person-crew.component';
import { CastSummaryComponent } from './person-overview/cast-summary/cast-summary.component';
import { CrewSummaryComponent } from './person-overview/crew-summary/crew-summary.component';
import { PersonInfoComponent } from './person-overview/person-info/person-info.component';
import { GeneralSharedModule } from '../shared/modules/general-shared/general-shared.module';

@NgModule({
  declarations: [PersonComponent, NoPersonFoundComponent, PersonOverviewComponent, PersonCastComponent, PersonCrewComponent, CastSummaryComponent, CrewSummaryComponent, PersonInfoComponent],
  imports: [
    CommonModule,
    PersonRoutingModule,
    NgbModule,
    PersonSharedModule,
    GeneralSharedModule,
    NgxPaginationModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class PersonModule { }
