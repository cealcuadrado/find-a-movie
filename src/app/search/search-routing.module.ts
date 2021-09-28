import { SearchDefaultComponent } from './search-default/search-default.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SearchComponent } from './search.component';

const routes: Routes = [
  {
    path: '',
    component: SearchDefaultComponent
  },
  {
    path: ':query',
    component: SearchComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SearchRoutingModule { }
