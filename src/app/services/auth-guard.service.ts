import { Injectable } from "@angular/core";
import { CanActivate, Router } from "@angular/router";
import { ToastrService } from "ngx-toastr";
import { AuthService } from "./auth.service";

@Injectable()
export class AuthGuardService implements CanActivate {
  constructor (private authService: AuthService, private router: Router, private toastr: ToastrService) {

  }

  canActivate() {
    console.log('authGuard Activated');
    if (!this.authService.isAuthenticated()) {
      this.router.navigate(['/login']);
      this.toastr.error('Access Failed!', 'Unauthorized');
      return false;
    }
    return true;
  }
}
