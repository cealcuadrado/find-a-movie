import { PersonCrewResultComponent } from './person-crew-result/person-crew-result.component';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PersonCastResultComponent } from './person-cast-result/person-cast-result.component';

@NgModule({
  declarations: [
    PersonCastResultComponent,
    PersonCrewResultComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    PersonCastResultComponent,
    PersonCrewResultComponent
  ]
})
export class PersonSharedModule { }
