import { TecnicoDetailComponent } from './components/tecnico-detail/tecnico-detail.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TecnicoCreateComponent } from './components/tecnico-create/tecnico-create.component';
import { TecnicoUpdateComponent } from './components/tecnico-update/tecnico-update.component';
import { TecnicosComponent } from './tecnicos.component';

const routes: Routes = [
  { path: '', component: TecnicosComponent },
  { path: 'new', component: TecnicoCreateComponent },
  { path: 'edit/:id', component: TecnicoUpdateComponent },
  { path: 'perfil/:id', component: TecnicoDetailComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TecnicosRoutingModule {}
