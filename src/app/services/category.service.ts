import { HttpClient, HttpClientModule } from "@angular/common/http";
import { EventEmitter, Injectable } from "@angular/core";
import { ItemService } from "./item.service";


@Injectable()
export class CategoryService {
    category: any[] = [];

    constructor(private itemService: ItemService, private http: HttpClient){
        
    }

    refreshItemList = new EventEmitter();

    getAllCategories() {  
        this.category = [];
        this.http
        .get(
            'http://ec2-18-141-58-241.ap-southeast-1.compute.amazonaws.com:8081/category'
        )
        .toPromise()
        .then((result: any) => {
            result.data.forEach((r: any) => {
                this.category.push({
                    id: r.id,
                    name: r.name,
                    des: r.description,
                    created_date: r.created_date
                });
            });
        });
        return this.category;
    }

    getCategoryName(id: any){
        // get id, return category name
    }
}