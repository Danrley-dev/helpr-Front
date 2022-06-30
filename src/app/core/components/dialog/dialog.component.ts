import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { AuthService } from '../../services/auth/auth.service';
import { Router } from '@angular/router';
import { HotToastService } from '@ngneat/hot-toast';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent implements OnInit {

  constructor(
    private authService: AuthService,
    private toast: HotToastService,
    private router: Router,
    public dialogRef: MatDialogRef<DialogComponent>,
  ) { }

  ngOnInit(): void {
  }

  next(): void {
    this.authService.onLogout();
    this.router.navigate(['/auth']);
    this.toast.success('Volte Sempre!');
    this.dialogRef.close();
  }

  cancel(): void {
    this.dialogRef.close();
  }

}
