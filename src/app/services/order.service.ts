import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { API_URL } from '../config';
import { HeaderService } from './header.service';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  httpOption

  constructor(private http: HttpClient, private cookieService: CookieService) {
    this.httpOption = new HeaderService(cookieService).httpOptionsAuth;
  }

  getAllOrders() {
    return this.http.get(
      `${API_URL}/order`,
      this.httpOption
    );
  }

  addOrder(list: any) {
    return this.http
        .post(
            `${API_URL}/order`,
            list,
            this.httpOption
        )
        .subscribe((res: any) => {
          console.log(list);
          console.log(res);

        });
  }
}
