import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoadingComponent } from './loading/loading.component';
import { UpIconComponent } from './up-icon/up-icon.component';

@NgModule({
  declarations: [
    LoadingComponent,
    UpIconComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    LoadingComponent,
    UpIconComponent
  ]
})
export class GeneralSharedModule { }
