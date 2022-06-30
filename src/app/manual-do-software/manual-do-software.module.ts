import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ManualDoSoftwareRoutingModule } from './manual-do-software-routing.module';
import { ManualDoSoftwareComponent } from './components/manual-do-software/manual-do-software.component';
import { MaterialModule } from '../shared/material.module';


@NgModule({
  declarations: [
    ManualDoSoftwareComponent
  ],
  imports: [
    CommonModule,
    ManualDoSoftwareRoutingModule,
    MaterialModule
  ]
})
export class ManualDoSoftwareModule { }
