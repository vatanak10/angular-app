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

  getAllSuppliers() {
    return this.http.get(
      `${API_URL}/supplier`,
      this.httpOption
    );
  }

  addSupplier(item: any) {
    return this.http
      .post(
          `${API_URL}/supplier`,
          item,
          this.httpOption
      );
  }
}
