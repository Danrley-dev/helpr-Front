import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Tecnico } from 'src/app/core/models/pessoa';

@Component({
  selector: 'app-tecnico-delete',
  templateUrl: './tecnico-delete.component.html',
  styleUrls: ['./tecnico-delete.component.scss']
})
export class TecnicoDeleteComponent implements OnInit {

  constructor(
    @Inject(MAT_DIALOG_DATA) public tecnico: Tecnico,
    private ref: MatDialogRef<TecnicoDeleteComponent>
  ) { }

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  onSubmit() {
    this.ref.close({ tecnico: this.tecnico });
  }
}