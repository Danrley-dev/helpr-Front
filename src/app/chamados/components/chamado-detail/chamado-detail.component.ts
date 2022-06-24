import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Chamado } from 'src/app/core/models/chamado';
import { ChamadosService } from 'src/app/core/services/chamados/chamados.service';

@Component({
  selector: 'app-chamado-detail',
  templateUrl: './chamado-detail.component.html',
  styleUrls: ['./chamado-detail.component.scss']
})
export class ChamadoDetailComponent implements OnInit {
  errorMsg = '';
  error = false;
  loading = false;
  chamado: Chamado = {} as Chamado;

  constructor(
    private chamadosService: ChamadosService, 
    private route: ActivatedRoute
    ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.params['id'];
    this.chamadosService.findById(id).subscribe({
      next: (chamado) => {
        this.chamado = chamado;
        this.loading = false;
        console.log(chamado)
      },
      error: (err) => {
        this.errorMsg = err.error.message;
        if (!this.errorMsg) this.errorMsg = 'Um erro aconteceu';
        this.error = true;
        this.loading = false;
      }
    })
  }

}
