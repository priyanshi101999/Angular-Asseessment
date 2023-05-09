import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { FilterPipe } from './filter.pipe';


@NgModule({
  declarations: [
    FilterPipe
  ],
  imports: [
    CommonModule,
    SharedRoutingModule
  ],
  exports: [
    FilterPipe
  ]
})
export class SharedModule { }
