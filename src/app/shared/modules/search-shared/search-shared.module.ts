import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DisplayModeComponent } from './display-mode/display-mode.component';
import { GoToPageComponent } from './go-to-page/go-to-page.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [DisplayModeComponent, GoToPageComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    DisplayModeComponent,
    GoToPageComponent
  ]
})
export class SearchSharedModule { }
