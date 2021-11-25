import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Injectable()
export class AuthService {

  constructor(private router: Router, private http: HttpClient, private cookieService: CookieService) { }

  isAuthenticated(): boolean {
    const accessToken = this.cookieService.get('access_token');
    return !(accessToken === null || accessToken === '' || accessToken === undefined);
  }

  login(auth: any) {
    let httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/x-www-form-urlencoded',
        Authorization: 'Basic Y2xpZW50OnBhc3N3b3Jk',
      }),
      body: null,
      params: new HttpParams(),
    };

    const body = new URLSearchParams();
    body.set('grant_type', 'password');
    body.set('username', auth.username);
    body.set('password', auth.password);

    this.http
      .post(
        'http://ec2-18-141-58-241.ap-southeast-1.compute.amazonaws.com:8082/oauth/token',
        body.toString(),
        httpOptions
      )
      .toPromise()
      .then((result: any) => {
        this.cookieService.set('access_token', result.access_token);
        this.cookieService.set('full_name', result.full_name);
        this.router.navigate(['/']);
      });
  }

  logOut() {
    this.cookieService.deleteAll();
    this.router.navigate(['/login']);
  }
}
