import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { AuthService } from '../../services/auth/auth.service';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';

interface MenuItem {
  link: string;
  label: string;
  icon: string;
}

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  userAdmin!: boolean;
  isHandset$: Observable<boolean> = this.breakpointObserver
    .observe(Breakpoints.Handset)
    .pipe(
      map((result) => result.matches),
      shareReplay()
    );

  constructor(
    private breakpointObserver: BreakpointObserver,
    private authService: AuthService,
    private dialog: MatDialog,
  ) { }
  tokenExpirationDate!: Date | null;
  role = this.authService.userRole();

  get emailUser() {
    return this.authService.emailUser;
  }

  get roleUser() {
    return this.authService.roleUser;
  }

  isAdmin() {
    const containsAdmin = this.authService.userInfo().subscribe(res => {
       const perfilsBolean = Object.keys(res.perfils).map(function (key: any) {
         if (res.perfils[key] == 'ADMIN') {
           return true
         }
         return false;
       })
       this.userAdmin = perfilsBolean.includes(true);
     
})
   }
  ngOnInit(): void {
    this.tokenExpirationDate = this.authService.getTokenExpirationDate();
    this.isAdmin();
  }

  logout(): void {
    const dialogRef = this.dialog.open(DialogComponent, {
      width: '250px',
    });

    dialogRef.afterClosed().subscribe(result => {
    });
  }

  itensMenu: MenuItem[] = [
    {
      link: '/home',
      label: 'Página inicial',
      icon: 'home',
    },
    {
      link: '/chamados',
      label: 'Chamados',
      icon: 'assignment',
    },
    {
      link: '/clientes',
      label: 'Clientes',
      icon: 'people',
    },
    {
      link: '/tecnicos',
      label: 'Técnicos',
      icon: 'engineering',
    },
    {
      link: '/manual-do-software',
      label: 'Manual do Software',
      icon: 'list_alt',
    },
  ];
}
