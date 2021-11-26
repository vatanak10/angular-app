import { HttpClient, HttpClientModule } from "@angular/common/http";
import { EventEmitter, Injectable } from "@angular/core";
import { CookieService } from "ngx-cookie-service";
import { API_URL } from "../config";
import { HeaderService } from "./header.service";
import { ItemService } from "./item.service";


@Injectable()
export class CategoryService {
    category: any[] = [];
    httpOption: any;

    constructor(private itemService: ItemService, private http: HttpClient, private cookieService: CookieService){
      this.httpOption = new HeaderService(cookieService).httpOptionsAuth;
    }

    refreshItemList = new EventEmitter();

    getAllCategories() {
      return this.http.get(`${API_URL}/category`, this.httpOption);
      // return this.http.get('http://ec2-18-141-58-241.ap-southeast-1.compute.amazonaws.com:8082/category', this.httpOption);
    }

    getCategoryName(id: any){
        // get id, return category name
    }

    addCategory(item: any) {
      return this.http
        .post(
            `${API_URL}/category`,
            item,
            this.httpOption
        );
    }
}
