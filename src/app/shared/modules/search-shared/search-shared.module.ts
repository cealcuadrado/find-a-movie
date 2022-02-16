import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DisplayModeComponent } from './display-mode/display-mode.component';

@NgModule({
  declarations: [DisplayModeComponent],
  imports: [
    CommonModule
  ],
  exports: [
    DisplayModeComponent
  ]
})
export class SearchSharedModule { }
