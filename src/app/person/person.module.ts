import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PersonRoutingModule } from './person-routing.module';
import { PersonComponent } from './person.component';
import { NoPersonFoundComponent } from './no-person-found/no-person-found.component';


@NgModule({
  declarations: [PersonComponent, NoPersonFoundComponent],
  imports: [
    CommonModule,
    PersonRoutingModule
  ]
})
export class PersonModule { }
