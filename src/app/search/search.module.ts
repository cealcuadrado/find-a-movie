import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SearchRoutingModule } from './search-routing.module';
import { SearchComponent } from './search.component';
import { SearchResultComponent } from './search-result/search-result.component';
import { SearchDefaultComponent } from './search-default/search-default.component';


@NgModule({
  declarations: [SearchComponent, SearchResultComponent, SearchDefaultComponent],
  imports: [
    CommonModule,
    SearchRoutingModule,
    NgxPaginationModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class SearchModule { }
