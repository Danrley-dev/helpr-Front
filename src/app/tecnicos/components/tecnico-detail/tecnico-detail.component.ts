import { Tecnico } from 'src/app/core/models/pessoa';
import { Pessoa } from './../../../core/models/pessoa';
import { Component, Inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TecnicosService } from 'src/app/core/services/tecnicos/tecnicos.service';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-tecnico-detail',
  templateUrl: './tecnico-detail.component.html',
  styleUrls: ['./tecnico-detail.component.scss'],
})
export class TecnicoDetailComponent implements OnInit {
  errorMsg = '';
  error = false;
  loading = true;
  pessoa: Pessoa = {} as Pessoa;


  tecnico$?: Observable<Tecnico>;

  constructor(
    private route: ActivatedRoute,
    private tecnicosService: TecnicosService,
    private dialog: MatDialog,
    @Inject(MAT_DIALOG_DATA) private data: Pessoa
  ) {}

  ngOnInit(): void {

    this.tecnico$ = this.tecnicosService.findById(this.data.id!);




    // const id = this.route.snapshot.params['id'];
    // this.tecnicosService.findById(id).subscribe({
    //   next: (pessoa) => {
    //     this.pessoa = pessoa;
    //     this.loading = false;
    //     console.log(pessoa);
    //   },
    //   error: (err) => {
    //     this.errorMsg = err.error.message;
    //     if (!this.errorMsg) this.errorMsg = 'Um erro aconteceu';
    //     this.error = true;
    //     this.loading = false;
    //   },
    // });
  }
}
