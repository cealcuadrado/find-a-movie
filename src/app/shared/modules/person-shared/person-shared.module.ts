import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PersonCastResultComponent } from './person-cast-result/person-cast-result.component';

@NgModule({
  declarations: [
    PersonCastResultComponent,
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    PersonCastResultComponent,
  ]
})
export class PersonSharedModule { }
