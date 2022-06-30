import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { MaterialModule } from '../shared/material.module';
import { RouterModule } from '@angular/router';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { DialogComponent } from './components/dialog/dialog.component';
import { AdminModule } from '../admin/admin.module';



@NgModule({
  declarations: [HeaderComponent, NotFoundComponent, DialogComponent],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule,
    AdminModule
  ]
})
export class CoreModule { }
