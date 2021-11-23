import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PersonRoutingModule } from './person-routing.module';
import { PersonComponent } from './person.component';
import { NoPersonFoundComponent } from './no-person-found/no-person-found.component';
import { PersonOverviewComponent } from './person-overview/person-overview.component';


@NgModule({
  declarations: [PersonComponent, NoPersonFoundComponent, PersonOverviewComponent],
  imports: [
    CommonModule,
    PersonRoutingModule,
    NgbModule
  ]
})
export class PersonModule { }
