import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TecnicosRoutingModule } from './tecnicos-routing.module';
import { TecnicosComponent } from './tecnicos.component';
import { MaterialModule } from '../shared/material.module';
import { TecnicoUpdateComponent } from './components/tecnico-update/tecnico-update.component';
import { TecnicoCreateComponent } from './components/tecnico-create/tecnico-create.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { NgxMaskModule } from 'ngx-mask';
import { TecnicoDetailComponent } from './components/tecnico-detail/tecnico-detail.component';
import { TecnicoDeleteComponent } from './components/tecnico-delete/tecnico-delete.component';

@NgModule({
  declarations: [
    TecnicosComponent,
    TecnicoUpdateComponent,
    TecnicoCreateComponent,
    TecnicoDetailComponent,
    TecnicoDeleteComponent,
  ],
  imports: [
    CommonModule,
    TecnicosRoutingModule,
    FormsModule,
    MaterialModule,
    ReactiveFormsModule,
    SharedModule,
    NgxMaskModule.forRoot()
  ],
})
export class TecnicosModule {}
