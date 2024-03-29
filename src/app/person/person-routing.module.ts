import { PersonCrewComponent } from './person-crew/person-crew.component';
import { PersonCastComponent } from './person-cast/person-cast.component';
import { PersonOverviewComponent } from './person-overview/person-overview.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PersonComponent } from './person.component';

const routes: Routes = [
  {
    path: ':id',
    component: PersonComponent,
    children: [
      { path: '', redirectTo: 'overview', pathMatch: 'full'},
      { path: 'overview', component: PersonOverviewComponent },
      { path: 'cast', component: PersonCastComponent },
      { path: 'crew', component: PersonCrewComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PersonRoutingModule { }
