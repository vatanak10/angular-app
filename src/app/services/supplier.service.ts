import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { API_URL } from '../config';
import { HeaderService } from './header.service';

@Injectable({
  providedIn: 'root'
})
export class SupplierService {
  httpOption: any;

  constructor(private http: HttpClient, private cookieService: CookieService) {
    this.httpOption = new HeaderService(cookieService).httpOptionsAuth;
  }

  getAllSupplier() {
    return this.http.get(
      `${API_URL}/supplier`,
      this.httpOption
    );
  }
}
