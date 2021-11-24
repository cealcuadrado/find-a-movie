import { SearchBarModule } from '../modules/search-bar/search-bar.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoadingComponent } from './loading/loading.component';
import { UpIconComponent } from './up-icon/up-icon.component';

@NgModule({
  declarations: [LoadingComponent, UpIconComponent],
  imports: [
    CommonModule,
  ],
  exports: [
    LoadingComponent,
    UpIconComponent,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class SharedComponentsModule { }
