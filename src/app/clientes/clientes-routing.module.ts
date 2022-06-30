import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientesComponent } from './clientes.component';
import { ClienteAbertoComponent } from './components/cliente-aberto/cliente-aberto.component';
import { ClienteCreateComponent } from './components/cliente-create/cliente-create.component';
import { ClienteUpdateComponent } from './components/cliente-update/cliente-update.component';

const routes: Routes = [
  { path: '', component: ClientesComponent },
  { path: 'new', component: ClienteCreateComponent },
  { path: 'edit/:id', component: ClienteUpdateComponent },
  {path: 'chamados/:id', component: ClienteAbertoComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClientesRoutingModule {}
