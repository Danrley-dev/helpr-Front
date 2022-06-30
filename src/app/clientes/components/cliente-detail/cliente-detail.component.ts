import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { ClientesService } from 'src/app/core/services/clientes/clientes.service';
import { Cliente } from 'src/app/core/models/pessoa';

@Component({
  selector: 'app-cliente-detail',
  templateUrl: './cliente-detail.component.html',
  styleUrls: ['./cliente-detail.component.scss']
})
export class ClienteDetailComponent implements OnInit {
    errorMsg = '';
    error = false;
    loading = true;
  
    cliente$?: Observable<Cliente>;

  constructor(
    private clientesService: ClientesService,
    @Inject(MAT_DIALOG_DATA) private data: Cliente

  ) {}

  ngOnInit(): void {
    this.cliente$ = this.clientesService.findById(this.data.id!);
  }

}
