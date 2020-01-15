import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, CanActivateChild, Router } from '@angular/router';
import { AuthService } from './auth.service';
import { Injectable } from '@angular/core';

@Injectable()
export class AuthGuardService implements CanActivate {
  constructor(private authService: AuthService) { }

  async canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this.authService.authenticate();
  }
}
