import { Component } from "@angular/core";
import { CookieService } from "ngx-cookie-service";
import { AuthService } from "../services/auth.service";

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})

export class HeaderComponent {
  username: string = "";
  constructor(public authService: AuthService, public cookieService: CookieService) {
    this.username = this.cookieService.get('full_name');
  }

  onLogout() {
    this.authService.logOut();
  }
}
