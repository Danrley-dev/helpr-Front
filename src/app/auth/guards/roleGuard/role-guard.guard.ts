import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/core/services/auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class RoleGuardGuard implements CanActivate {
  
  constructor(
    private authSerivce: AuthService,
    private router: Router
  ) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.isAthorized(route);
  }

  private isAthorized(route: ActivatedRouteSnapshot): boolean {
    const role = 'Admin';
    if(this.authSerivce.roleUser?.toUpperCase != role.toUpperCase) {
      this.router.navigate(['/']);
      return false;
    }
    return true;
  }
}